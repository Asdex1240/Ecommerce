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
  
  deleteProduct(data: any){
    this.productosService.carrito = this.productosService.carrito.filter(item => {
    return  item.productos !== data;
    }); 
  }

  changeCantidad(producto:any, status:number){
    if(status == 1){
      producto.cantidad++;
    }else{
      if(producto.cantidad < 2){
        console.log('eliminar');
        this.deleteProduct(producto.productos);
      }else{
        producto.cantidad--;
      }
    }
  }

}
