import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {

  category!: Category;
  id!: any;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router, private toastController: ToastController) { }



  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.categoryService.getCategory(this.id).subscribe(
      (response: Category) => {
        this.category = response;
        // console.log(this.categories);
      },
      (error: HttpErrorResponse) => {
        this.presentToast("bottom", error.message, "danger")
      }
    );

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

  onUpdate(category: Category) {
    category.id = this.id;
    console.log(category)
    this.categoryService.updateCategory(category).subscribe(
      (response: Category) => {
        this.presentToast("bottom", "Bien modifier")
        return this.router.navigateByUrl('/category');

      },
      (error: HttpErrorResponse) => {
        this.presentToast("bottom", error.message, "danger")
      }
    );
  }

}
