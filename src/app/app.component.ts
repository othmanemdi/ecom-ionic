import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public adminPages = [
    { title: 'Tableau de bord', url: 'home', icon: 'log-out' },
    { title: 'Commandes', url: 'order', icon: 'log-out' },
    { title: 'Produits', url: 'product', icon: 'log-out' },
    { title: 'Catégories', url: 'category', icon: 'log-out' },
    { title: 'Logout', url: 'login', icon: 'log-out' },
  ];

  public clientPages = [
    { title: 'Accueil', url: 'home', icon: 'log-out' },
    { title: 'Catégories', url: 'category', icon: 'log-out' },
    { title: 'Panier', url: 'cart', icon: 'log-out' },
    { title: 'Commandes', url: 'order', icon: 'log-out' },
    { title: 'Profil', url: 'profile', icon: 'log-out' },
    { title: 'Logout', url: 'login', icon: 'log-out' },
  ];
  constructor() { }
}
