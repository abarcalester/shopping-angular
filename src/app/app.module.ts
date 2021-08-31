import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CartComponent } from './cart/cart.component'


import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'courses', component: CoursesListComponent},
  { path: 'cart', component: CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CoursesListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
