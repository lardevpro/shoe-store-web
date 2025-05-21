// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';

import { HomeComponent } from './app/pages/home/home.component';
import { CatalogComponent } from './app/pages/catalog/catalog.component';
import { AboutComponent } from './app/pages/about/about.component';
import { Form } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShoesComponent } from './app/components/shoe-card/shoes.components';
import { BagsComponent } from './app/components/bag-card/bags.component';
import { AccessoriesComponent } from './app/components/accesories-card/accesories.component';
import { FormComponent } from './app/components/form/form.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: FormComponent }, // <--- coma agregada aquí
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      { path: 'shoes', component: ShoesComponent },
      { path: 'bags', component: BagsComponent },
      { path: 'accessories', component: AccessoriesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
