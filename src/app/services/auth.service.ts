import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Login, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async register(data: User){
    try{
      const user = await createUserWithEmailAndPassword(
        this.auth,
        data.correo,
        data.password
      );
      return user;
    } catch(error){
      console.log(error);
      return null;
    }
  }

  async login(data: Login){
    try{
      const user = await signInWithEmailAndPassword(
        this.auth,
        data.correo,
        data.password
      );
      return user;
    } catch(error){
      console.log(error);
      return null;
    }
  }
  
  logout() {
    return signOut(this.auth);
  }
  
}
