import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.page.html',
  styleUrls: ['./category-add.page.scss'],
})
export class CategoryAddPage implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router, private toastController: ToastController, private navController: NavController) { }

  ngOnInit() {
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

  onAdd(category: Category) {
    // console.log(category)
    this.categoryService.addCategory(category).subscribe(
      (response: Category) => {
        this.presentToast("bottom", "Bien ajouter")
        return this.router.navigateByUrl('/category');
        // return this.navController.back();
      },
      (error: HttpErrorResponse) => {
        this.presentToast("bottom", error.message, "danger")
      }
    );
  }

}
