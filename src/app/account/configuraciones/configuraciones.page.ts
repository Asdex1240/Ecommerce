import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
})
export class ConfiguracionesPage implements OnInit {

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
