import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticated: boolean = false;
  public token: any;
  constructor() { }

  public login(username: string, password: string) {
    if (username == 'admin' && password == 'admin2') {
      this.set_token();
      return this.authenticated = true;
    }
    return this.authenticated;
  }

  public set_token() {
    this.token = 'Token';
    localStorage.setItem('Token', this.token);
  }

  public get_token() {
    this.token = localStorage.getItem('Token');
    if (this.token == 'Token') {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    return this.authenticated;
  }

  public logout() {
    localStorage.removeItem('Token')
  }
}
