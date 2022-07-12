import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  productos: Producto[] = [
    {
      nombre: 'Pizza',
      img: 'assets/img/productos/pizza.jpg',
      descripcion: 'Pizza es una comida típica de la cocina española, que se sirve en una masa de	pan de una masa diferente, que se rellena con una variedad de ingredientes, que se acompaña con una salsa o una aderezada.',
      precio: 10,
      id: '1',
      categoria: 'Pizzas',
      stock: 10
    },
    {
      nombre: 'Hamburguesa',
      img: 'assets/img/productos/hamburguesa.jpg',
      descripcion: 'Hamburguesa es una comida típica de la cocina española, que se sirve en una masa de	pan de una masa diferente, que se rellena con una variedad de ingredientes, que se acompaña con una salsa o una aderezada.',
      precio: 10,
      id: '2',
      categoria: 'Hamburguesas',
      stock: 10
    },
    {
      nombre: 'Pollo',
      img: 'assets/img/productos/pollo.jpg',
      descripcion: 'Pollo es una comida típica de la cocina española, que se sirve en una masa de	pan de una masa diferente, que se rellena con una variedad de ingredientes, que se acompaña con una salsa o una aderezada.',
      precio: 10,
      id: '3',
      categoria: 'Pollo',
      stock: 10
    },
    {
      nombre: 'Pescado',
      img: 'assets/img/productos/pescado.jpg',
      descripcion: 'Pescado es una comida típica de la cocina española, que se sirve en una masa de	pan de una masa diferente, que se rellena con una variedad de ingredientes, que se acompaña con una salsa o una aderezada.',
      precio: 10,
      id: '4',
      categoria: 'Pescado',
      stock: 10
    },
  ]
}
