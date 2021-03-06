import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Auth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { Categoria } from '../models/producto.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile: any;
  productos = this.productosSvc.productos;
  dataProfile = {
    nombre: '',
  }

  categories= this.productosSvc.categories;
  
  constructor(
    private productosSvc: ProductosService,
    private auth: Auth,
    private menuCtrl: MenuController,
    private firebaseSvc: FirebaseService
    ) 
    {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          this.profile = true
          this.firebaseSvc.getInfoUser().subscribe(data => {
            this.dataProfile.nombre = data.nombre;
          });
        }else{
          this.profile = false;
        }
      });    
    }

    menu(){
      this.menuCtrl.toggle();
    }
    onCategoryChange(event){
      console.clear();
      console.log(event.detail.value);
    }
}
