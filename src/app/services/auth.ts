import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'https://backend-olimpiadas.onrender.com';

  private loginData:any = new BehaviorSubject<any>("{}");
  router: any;

  constructor(private http:HttpClient) {

   }

  isAuthenticated(): Observable<any> {
    return this.loginData.asObservable();
  }

  login(userRequest:any): Observable<any> {
    return this.http.post(`${this.url}/login`, userRequest).pipe(tap(
      (response: any) => {
        localStorage.setItem('authenticatedUserId', response.user_id);
        this.loginData.next(response);
        return response;
      }
    ));
  }
  register(userData: any): Observable<any> {
  return this.http.post(`${this.url}/users`, userData).pipe(tap(
    (response: any) => {
      localStorage.setItem('authenticatedUserId', response.user_id);
      this.loginData.next(response);
      return response;
    }
  ));
}
  logout(): void {
    localStorage.removeItem('authenticatedUserId');
    this.loginData.next({});
    this.router.navigate(['/login']);

  }

  getAuthenticatedUserId(): string | null {
    return localStorage.getItem('authenticatedUserId');
  }
}