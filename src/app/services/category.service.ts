import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = environment.API;

  httpOptionsToken = {
    headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.get_token() }),
  };

  // `Bearer ${this.authService.get_token()}`

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}/categories`, this.httpOptionsToken);
  }

  public getCategory(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${this.API_URL}/categories/${categoryId}`, this.httpOptionsToken);
  }

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.API_URL}/categories`, category, this.httpOptionsToken);
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.API_URL}/categories/${category.id}`, category, this.httpOptionsToken);
  }

  public deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/categories/${categoryId}`, this.httpOptionsToken);
  }
}
