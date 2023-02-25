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
    const data: {} = {
      email: user.email,
      password: user.password,
      device_name: "android"
    };

    console.log("data " + JSON.stringify(data))

    let response = this.authService.login(data);

    if (response == true) {
      this.presentToast("bottom", "Bien connecter")
      return this.router.navigateByUrl('/home');
    }
    else {
      // console.log(error);
      this.presentToast("bottom", "Email ou mot de passe incorrect")
      return this.router.navigateByUrl('/login');
    }
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
