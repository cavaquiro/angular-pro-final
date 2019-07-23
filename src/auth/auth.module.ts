import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {AngularFireModule, FirebaseAppConfig} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";

import {SharedModule} from "./shared/shared.module";

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'login'},
            {path: 'login', loadChildren: './login/login.module#LoginModule'},
            {path: 'register', loadChildren: './register/register.module#RegisterModule'}
        ]
    }
];

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyDgeBmx9iFpYZsk8kLAfoLQMOx2Yd5bzb0",
    authDomain: "angular-final-app-88ba0.firebaseapp.com",
    databaseURL: "https://angular-final-app-88ba0.firebaseio.com",
    projectId: "angular-final-app-88ba0",
    storageBucket: "angular-final-app-88ba0.appspot.com",
    messagingSenderId: "896387923808",
    appId: "1:896387923808:web:8e295b820fb6cb08"
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {
}

