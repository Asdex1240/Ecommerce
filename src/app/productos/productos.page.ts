import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto, Pedido } from '../models/producto.model';
import { IonItem, MenuController } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  producto: Producto;
  statusProfile;
  carrito = {
    productos: '',
    idProductos: '',
    idComprador: '',
    monto: null,
    status: false,
    cantidad: null,
    fecha: '',
  }

  constructor
  (
    public productosService: ProductosService,
    private route: ActivatedRoute,
    private auth: Auth,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.route.params.subscribe(params => {
      this.producto = this.productosService.productos.find(producto => producto.id == params.id);
    });
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.statusProfile = true
      }else{
        this.statusProfile = false;
      }
    });

  }
  ngOnInit() {
  }

  menu(){
    this.menuCtrl.toggle();
  }

  openCart(){
    if(this.statusProfile){
      const y = this.productosService.productos.find(item => item.id == this.producto.id)
      if(y){
        y.stock--;
      }
      const x = this.productosService.carrito.find(item => item.idProductos == this.producto.id)
      if(x){
        x.cantidad++;
      }else{

      this.carrito.productos = this.producto.nombre;
      this.carrito.idProductos = this.producto.id;
      this.carrito.idComprador = this.auth.currentUser.uid;
      this.carrito.monto = this.producto.precio;
      this.carrito.status = false;
      this.carrito.cantidad = 1;
      this.carrito.fecha = new Date().toISOString();
      this.productosService.carrito.push(this.carrito);

      }

    }else{
      this.router.navigateByUrl('/login');
    }
  }
}
