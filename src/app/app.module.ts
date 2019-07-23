import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment'
import {AppComponent} from './containers/app/app.component';
import {RouterModule, Routes} from "@angular/router";

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {Store} from 'store';

import {AuthModule} from "../auth/auth.module";
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import {SharedModule} from "../shared/shared.module";
import { HealthModule } from "../health/health.module";

export const ROUTES: Routes = [{
    path:'', pathMatch: 'full', redirectTo: 'schedule'
}];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        RouterModule.forRoot(ROUTES),
        SharedModule,
        AuthModule,
        HealthModule
    ],
    declarations: [AppComponent, MainHeaderComponent, MainNavComponent],
    providers: [Store],
    bootstrap: [AppComponent]
})
export class AppModule {
}
