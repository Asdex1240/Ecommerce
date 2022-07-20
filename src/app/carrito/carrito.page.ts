import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../services/productos.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor
  (
    private menuCtrl: MenuController,
    public productosService: ProductosService
  ) {}

  ngOnInit() {
  }

  menu(){
    this.menuCtrl.toggle();
  }
  
}
