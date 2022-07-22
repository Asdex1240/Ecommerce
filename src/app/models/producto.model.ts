export class Producto {

	nombre: string;
	img: string;
	descripcion: string;
	precio: number;
	id: string;
	categoria: string;
	stock: number;

}

export class Categoria {
	
	nombre: string;
	id: string;

}

export class Pedido {	
	productos: string;
	idProductos: any;
	idComprador: string;
	monto: number;
	status: boolean;
	cantidad: number;
	fecha: string;
	submonto: number;
}