// src/app/panier/panier.component.ts

import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';
import { Produit } from '../produit.model';  // Importer l'interface Produit

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  standalone : false
})
export class PanierComponent implements OnInit {
  panier: Produit[] = [];  // Déclare le panier comme un tableau de produits
  total: number = 0;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    // Charger les produits du panier au démarrage
    this.panier = this.panierService.obtenirPanier();
    this.calculerTotal(); // Calculer le total lors de l'initialisation
  }

  retirerDuPanier(produit: Produit): void {
    this.panierService.retirerDuPanier(produit); // Retirer le produit du panier
    this.panier = this.panierService.obtenirPanier(); // Mettre à jour le panier
    this.calculerTotal();  // Recalculer le total
  }

  // Calculer le total des produits dans le panier
  calculerTotal(): void {
    this.total = this.panierService.calculerTotal();
    
  }
}
