import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ContatcPageComponent} from './components/contatc-page/contatc-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {SingupPageComponent} from './components/singup-page/singup-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contactanos', component: ContatcPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SingupPageComponent},
  {path: '**', component: NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
