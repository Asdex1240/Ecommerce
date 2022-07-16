import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor
  (
    private menuCtrl: MenuController

  ) { }

  ngOnInit() {
  }

  menu(){
    this.menuCtrl.toggle();
  }
  
}
