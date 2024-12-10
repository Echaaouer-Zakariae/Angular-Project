// src/app/panier.service.ts

import { Injectable } from '@angular/core';
import { Produit } from './produit.model';  // Importer l'interface Produit

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  produits: Produit[] = [
    { id: 1, nom: 'Produit 1', prix: 20, imageUrl: 'assets/images/parfum1.webp' },
    { id: 2, nom: 'Produit 2', prix: 35, imageUrl: 'assets/images/parfum2.webp' },
    { id: 3, nom: 'Produit 3', prix: 15, imageUrl: 'assets/images/parfum3.jpeg' },
    { id: 4, nom: 'Produit 4', prix: 25, imageUrl: 'assets/images/parfum4.jpg' } // ID unique ici
  ];

  panier: Produit[] = [];  // Déclare le panier comme un tableau de produits

  constructor() { }

  ajouterAuPanier(produit: Produit) {
    this.panier.push(produit);
  }

  retirerDuPanier(produit: Produit) {
    this.panier = this.panier.filter(p => p.id !== produit.id);
  }

  obtenirPanier(): Produit[] {
    return this.panier;
  }

  calculerTotal(): number {
    return this.panier.reduce((total, produit) => total + produit.prix, 0);
  }
}
