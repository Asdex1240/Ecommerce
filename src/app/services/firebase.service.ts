import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, docData, collection, deleteDoc, collectionData } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  x;
  constructor
  (
    private auth: Auth,
    private firestore: Firestore
  ) { }

  getInfoUser(){
    const user = this.auth.currentUser;
    //console.log(user);
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDocRef);
  }
 
  uploadUser(path: string ,profile: User){
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `${path}/${user.uid}`);
    return setDoc(userDocRef, profile);
  }
 
  getCollection(path: string){
    const coll = collection(this.firestore, path);
    return collectionData(coll);
  }
 
  deleteDocument(id: string) {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return deleteDoc(userDocRef);
  }

  statusUser(){
    this.auth.onAuthStateChanged(async user => {
      if (user) {
        console.log(user.displayName);
      }else{
        console.log('No user logged');
      }
    });
  }
}
