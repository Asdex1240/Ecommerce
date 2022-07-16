import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { setDoc } from 'firebase/firestore';
import {uploadString } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor
  (private auth: Auth,
    private firestore: Firestore,
    private storage: Storage,
  ) { }

  getUserProfile() {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDocRef);
  }

  async uploadImage(cameraFile: Photo, folder: string, id: string) {

    const path = `uploads/${folder}/${id}`;
    const storageRef = ref(this.storage, path);
    try{
      await uploadString(storageRef, cameraFile.base64String, 'base64');
      const imageUrl = await getDownloadURL(storageRef);
      const userDocRef = doc(this.firestore, `${folder}/${id}`);
      await setDoc(userDocRef, {
        imageUrl,
      })
      return true;

    } catch(error){
      console.log(error);
      return null;
    }
  }
}
