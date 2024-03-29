import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

import {Store} from 'store';
import {tap} from 'rxjs/operators'

export interface User {
  uid: string,
  email: string,
  authenticated: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth$ = this.af.authState
      .pipe(tap(next => {
        if(!next){
          this.store.set('user',null);
        }else{
          const user: User = {
            email: next.email,
            uid: next.uid,
            authenticated : true
          };
          this.store.set('user',user);
        }
      }));

  constructor(
      private store: Store,
      private af: AngularFireAuth
  ) { }

  get authState(){
    return this.af.authState;
  }

  get user(){
    return this.af.auth.currentUser;
  }


  createUser(email: string, password: string) {
    return this.af.auth
        .createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string){
    return this.af.auth
        .signInWithEmailAndPassword(email, password);
  }

  logoutUser(){
    return this.af.auth.signOut();
  }
}
