import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router, private platform: Platform, private toastController: ToastController) { }

  ngOnInit() {
    this.authService.logout();
    console.log(this.platform.platforms())
  }

  onLogin(user: any) {
    let authorise = this.authService.login(user.username, user.password);
    // console.log(authorise)
    if (authorise) {
      this.presentToast("bottom", "Bien connecter")
      return this.router.navigateByUrl('/home');
    }
    this.presentToast("bottom", "Email ou mot de passe incorrect")
    return this.router.navigateByUrl('/login');
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string, color: string = "dark") {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      color: color
    });

    await toast.present();
  }


}
