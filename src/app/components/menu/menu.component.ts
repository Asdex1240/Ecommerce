import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
  opciones = ['account','home', 'login'];
  ngOnInit() {}
  goTo(data){
    if(data == 'acerca de mi'){
      data = 'home';
    }
    this.router.navigateByUrl('/'+data);
  }
}
