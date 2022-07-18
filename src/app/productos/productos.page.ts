import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto.model';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  producto: Producto;
  constructor
  (
    private productosService: ProductosService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.producto = this.productosService.productos.find(producto => producto.id == params.id);
    });
  }
  ngOnInit() {
  }

}
