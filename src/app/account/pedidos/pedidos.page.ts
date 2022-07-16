import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

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
