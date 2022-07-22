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
    ) {
      
    }
    precioFinal = 0;

  ngOnInit() {
    console.log('hola');
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
      this.productosService.productos.find(item => item.id == producto.idProductos).stock--;
      this.calculoTotal();
      
    }else{
      if(producto.cantidad < 2){
        this.deleteProduct(producto.productos);
      }else{
        producto.cantidad--;
        this.productosService.productos.find(item => item.id == producto.idProductos).stock++;
        this.calculoTotal();
      }
    }
    producto.submonto = producto.cantidad * producto.monto;
  }

  calculoTotal(){
    
    this.precioFinal = 0;
    this.productosService.carrito.forEach(item => {
      console.log(item);
      this.precioFinal = item.submonto;
    });

  }

}
