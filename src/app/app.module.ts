import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';
import { ItmesComponent } from './itmes/itmes.component';
import { SingelItemComponent } from './singel-item/singel-item.component';

import { Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'items', component: ItmesComponent },
  { path: 'item/:id', component: SingelItemComponent }
  /*{ path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent }*/
];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    UserComponent,
    BlogComponent,
    ItmesComponent,
    SingelItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
