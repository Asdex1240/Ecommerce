import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Login, User } from '../models/user.model';
import { AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  activador: boolean = false;

  log: Login ={

    correo: '',
    password: ''
  
  };

  register: User = {

    nombre: '',
    direccion: '',
    codigoPostal: null,
    correo: '',
    password: '',
    id: ''

  };

  verificador = '';

  constructor
  (
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {

  }

  async login(){
    const loading = await this.loadingController.create();
    await loading.present();
    const user = await this.authService.login(this.log);
    await loading.dismiss();
    if (user) {
      this.router.navigateByUrl('/home',{replaceUrl: true} );
    }else{
      this.showAlert('Error', 'Favor de verificar sus datos');
    }
  }

  async registerUser(){
    if(this.register.nombre && this.register.correo && this.register.password && this.register.password == this.verificador){
      console.log('Hola');

      const loading = await this.loadingController.create();
      const user = await this.authService.register(this.register);
      await loading.present();
      await loading.dismiss();
      if (user) {
        const path = 'users';
        this.register.id = user.user.uid;
        this.register.password = '';
        this.firebaseService.uploadUser(path, this.register);
        this.router.navigateByUrl('/home',{replaceUrl: true} );
      }else{
        this.showAlert('Error', 'Favor de verificar sus datos');
      }
    }else{
      this.showAlert('Error', 'Favor de verificar sus datos');
    }
  }

  activar(){
    this.activador = !this.activador;
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
