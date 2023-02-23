import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = environment.API;

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}/categories`);
  }

  public getCategory(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${this.API_URL}/categories/${categoryId}`);
  }

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.API_URL}/categories`, category);
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.API_URL}/categories/${category.id}`, category);
  }

  public deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/categories/${categoryId}`);
  }
}
