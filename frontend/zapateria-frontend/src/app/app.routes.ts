// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { CatalogComponent } from './app/pages/catalog/catalog.component';
import { AboutComponent } from './app/pages/about/about.component';
import { ContactComponent } from './app/pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
