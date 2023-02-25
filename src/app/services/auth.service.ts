import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token } from '../interfaces/token';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private API_URL = environment.API;

  public authenticated: boolean = false;

  authenticatedUser: User | undefined;

  public token: any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  httpOptionsToken = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.get_token() }),
  };

  constructor(private http: HttpClient) { }


  public set_token(token: any) {
    this.token = token;
    localStorage.setItem('Token', this.token);
  }

  public get_token() {
    return localStorage.getItem('Token');
  }

  login(data: User) {
    this.http.post<Token>(`${this.API_URL}/auth/login`, data, this.httpOptions).subscribe(
      (response) => {
        // console.log('Loged')
        this.set_token(response.access_token);
        this.authenticated = true;
      },
      (error) => {
        this.authenticated = false;
      });
    return this.authenticated;
  }

  isAuthenticated() {
    return this.authenticated;
  }

  logout() {
    this.authenticated = false;
    // this.authenticatedUser = undefined;
    localStorage.removeItem('Token')
  }



  // loadUser() {
  //   let user = localStorage.getItem('user_info');
  //   if (user) {
  //     this.authenticatedUser = JSON.parse(user);
  //     this.authenticated = true;
  //   }
  // }

  // public getUserInfo() {
  //   return this.http.get<User>(`${this.API_URL}/profile`, this.httpOptionsToken);
  // }

}
