// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path : '' , component : ProduitsComponent},
  {path : 'panier' , component : PanierComponent}, 
  {path : 'produits', component : ProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
