import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ContatcPageComponent} from './components/contatc-page/contatc-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contactanos', component: ContatcPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
