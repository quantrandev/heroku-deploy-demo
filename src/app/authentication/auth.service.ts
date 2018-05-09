import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): Promise<boolean> {
    if (email === 'quan081196@gmail.com' && password === 'quantrandev') {
      localStorage.setItem(
        'credential',
        JSON.stringify({ email: email, password: password })
      );

      return new Promise((res, rej) => {
        res(true);
      });
    }
    return new Promise((res, rej) => {
      res(false);
    });
  }

  logout() {
    localStorage.removeItem('credential');
  }

  isLoggedIn() {
    return localStorage.getItem('credential');
  }
}
