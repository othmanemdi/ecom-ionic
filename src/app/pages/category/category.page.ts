import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  public categories!: Category[];
  constructor(private categoryService: CategoryService, private router: Router, private toastController: ToastController, private loadingCtr: LoadingController) {
  }

  ngOnInit() {
    this.getCategories();
  }

  ionViewDidEnter() {
    this.getCategories();
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

  async getCategories() {

    const loading = await this.loadingCtr.create({
      message: "Loading...",
      spinner: "bubbles",
    })
    await loading.present();
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => {
        loading.dismiss()
        this.categories = response;
        // console.log(this.categories);
      },
      (error: HttpErrorResponse) => {
        this.presentToast("bottom", error.message, "danger")
      }
    );
  }

  onDelete(c: Category) {
    this.categoryService.deleteCategory(c.id).subscribe(
      (response) => {
        this.getCategories();
        this.presentToast("bottom", "Bien supprimer");
      },
      (error: HttpErrorResponse) => {
        this.presentToast("bottom", error.message, "danger")
      }
    );
  }

}
