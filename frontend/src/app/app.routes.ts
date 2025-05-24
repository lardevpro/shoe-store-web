// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';

import { HomeComponent } from './app/pages/home/home.component';
import { AboutComponent } from './app/pages/about/about.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoesComponent } from './app/components/shoe-card/shoes.components';
import { BagsComponent } from './app/components/bag-card/bags.component';
import { AccessoriesComponent } from './app/components/accesories-card/accesories.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'shoes',component: ShoesComponent}, 
  {path:'bags',component: BagsComponent},
  {path:'accessories',component: AccessoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
