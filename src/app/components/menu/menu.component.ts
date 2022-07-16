import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  status: boolean;
  menuFiltrado = [];
  constructor(private router: Router, private authService: AuthService, private auth: Auth) { 
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.status = true;
      }else{
        this.status = false;
      }
      this.menuFiltrado = this.filterMenu();
    });
  }

  opciones = [
    {
      nombre: 'Inicio',
      url: 'home',
    },
    {
      nombre: 'Cuenta',
      url: 'account',
      require: true
    },
    {
      nombre: 'Carrito',
      url: 'carrito',
      require: true
    },
    {
      nombre: 'Iniciar Sesión',
      url: 'login',
      require: false
    },
    {
      nombre: 'Salir',
      url: 'logout',
      require: true
    }
  ];
  ngOnInit() {
    
  }

  goTo(data: string){
    if(data == 'logout'){
      this.authService.logout();
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }else{
      this.router.navigateByUrl('/'+data);
    }
  }
  filterMenu(){
    return this.opciones.filter(item => {
      if(item.nombre == 'Inicio'){
        return true;
      }
      return item.require == this.status;
    }
    );
  }
}
