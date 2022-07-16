import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { FirebaseService } from '../services/firebase.service';
import { Auth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile: any;
  productos = this.productosSvc.productos;

  constructor(
    private productosSvc: ProductosService,
    private firebaseSvc: FirebaseService,
    private auth: Auth,
    private menuCtrl: MenuController
    ) 
    {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          this.profile = true
        }else{
          this.profile = false;
        }
        console.log(this.profile);
      });    
    }
    menu(){
      this.menuCtrl.toggle();
    }
}
