// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';





export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }, 
  { path: 'catalog', component: CatalogComponent }, 
  { path: 'contact', component: ContactFormComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
