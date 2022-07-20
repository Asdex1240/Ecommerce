import { Injectable } from '@angular/core';
import { Producto, Pedido } from '../models/producto.model';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  productos: Producto[] = [
    {
      nombre: 'Pizza',
      img: 'https://static.docsity.com/documents_first_pages/2018/11/16/b99921254f00a207bdcab233f774bafc.png',
      descripcion: 'Pizza es una comida típica de la cocina española, que se sirve en una masa de	pan de una masa diferente, que se rellena con una variedad de ingredientes, que se acompaña con una salsa o una aderezada.',
      precio: 10,
      id: '1',
      categoria: 'Pizzas',
      stock: 10
    },
    {
      nombre: 'Hamburguesa',
      img: 'https://static.docsity.com/documents_first_pages/2018/11/16/b99921254f00a207bdcab233f774bafc.png',
      descripcion: 'Hamburguesa es una comida típica de la cocina española, que se sirve en una masa de	pan de una masa diferente, que se rellena con una variedad de ingredientes, que se acompaña con una salsa o una aderezada.',
      precio: 10,
      id: '2',
      categoria: 'Hamburguesas',
      stock: 10
    },
    {
      nombre: 'Pollo',
      img: 'https://static.docsity.com/documents_first_pages/2018/11/16/b99921254f00a207bdcab233f774bafc.png',
      descripcion: 'Pollo es una comida típica de la cocina española, que se sirve en una masa de	pan de una masa diferente, que se rellena con una variedad de ingredientes, que se acompaña con una salsa o una aderezada.',
      precio: 10,
      id: '3',
      categoria: 'Pollo',
      stock: 10
    },
    {
      nombre: 'Pescado',
      img: 'https://static.docsity.com/documents_first_pages/2018/11/16/b99921254f00a207bdcab233f774bafc.png',
      descripcion: 'Pescado es una comida típica de la cocina española, que se sirve en una masa de	pan de una masa diferente, que se rellena con una variedad de ingredientes, que se acompaña con una salsa o una aderezada.',
      precio: 10,
      id: '4',
      categoria: 'Pescado',
      stock: 10
    },
  ]
  
  categories= ['Pizzas', 'Hamburguesas', 'Pollo', 'Pescado'];

  carrito: Pedido[] = [
    {
      productos: 'Pizza',
      idProductos: '1',
      idComprador: '1',
      monto: 10,
      status: false,
      cantidad: 1,
      fecha: '',
    },
  ];

}
