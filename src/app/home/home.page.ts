import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { FirebaseService } from '../services/firebase.service';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile: any;

  constructor(
    private productosSvc: ProductosService,
    private firebaseSvc: FirebaseService,
    private auth: Auth
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
  productos = this.productosSvc.productos;
}
