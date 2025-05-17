// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';

import { HomeComponent } from './app/pages/home/home.component';
import { CatalogComponent } from './app/pages/catalog/catalog.component';
import { AboutComponent } from './app/pages/about/about.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoesComponent } from './app/components/shoe-card/shoes.components';
import { BagsComponent } from './pages/bags/bags.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }, // <--- coma agregada aquí
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
