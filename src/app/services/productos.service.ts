import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  productos = [
    {
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precio: '$100',
      imagen: 'assets/img/producto1.jpg',
      cantidad: 20
    },
    {
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precio: '$200',
      imagen: 'assets/img/producto2.jpg',
      cantidad: 10
    },
    {
      nombre: 'Producto 3',
      descripcion: 'Descripción del producto 3',
      precio: '$300',
      imagen: 'assets/img/producto3.jpg',
      cantidad: 5
    }
  ];
}
