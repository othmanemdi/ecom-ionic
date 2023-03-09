import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

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
    { title: 'Produits', url: 'product', icon: 'log-out' },
    { title: 'Panier', url: 'cart', icon: 'log-out' },
    { title: 'Commandes', url: 'order', icon: 'log-out' },
    { title: 'Profil', url: 'profile', icon: 'log-out' },
    { title: 'Logout', url: 'login', icon: 'log-out' },
  ];

  constructor(public authService: AuthService) { }

  // ionViewDidEnter() {
  //   console.log(this.authService.authenticated);
  //   console.log(this.authService.authenticatedUser);
  //   this.loadUserInfo();
  // }
  // public loadUserInfo() {

  //   this.authService.getUserInfo().subscribe(
  //     (response) => {
  //       localStorage.setItem('user_info', JSON.stringify({ name: response.name, email: response.email }));
  //       this.authService.loadUser();
  //     },
  //     (error) => {
  //       console.log(error);
  //     });
  // }


}
