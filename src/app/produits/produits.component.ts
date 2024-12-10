// src/app/produits/produits.component.ts

import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';  // Importer le service Panier
import { Produit } from '../produit.model';  // Importer l'interface Produit

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  standalone : false
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];  // Déclare un tableau pour les produits

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    // Charger les produits initialement
    this.produits = this.panierService.produits;
  }

  ajouterAuPanier(produit: Produit): void {
    this.panierService.ajouterAuPanier(produit);  // Ajouter le produit au panier
  }
}
