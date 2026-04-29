import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginCreds, RegisterCreds, User } from '../../types/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Means this class can be injected into other components or services throughout the application.
// This is a common pattern in Angular applications to create services that can be shared across multiple components, allowing for better separation of concerns and easier maintenance.
// It is singleton by default.

// This service will handle all account-related operations such as login, logout, registration, and user profile management.
export class AccountService {
  private http = inject(HttpClient);

  // Signal to hold the current user information and allow components to reactively update when the user state changes.
  currentUser = signal<User | null>(null);

  baseUrl = 'https://localhost:5001/api/'; // Base URL for account-related API endpoints

  register(creds: RegisterCreds) {
    return this.http.post<User>(this.baseUrl + 'account/register', creds).pipe(
      // The tap operator allows us to perform side effects (like updating the currentUser signal) without affecting the observable stream.
      tap((user) => {
        if (user) {
          this.setCurrentUser(user);
        }
      }),
    );
  }

  login(creds: LoginCreds) {
    return this.http.post<User>(this.baseUrl + 'account/login', creds).pipe(
      // The tap operator allows us to perform side effects (like updating the currentUser signal) without affecting the observable stream.
      tap((user) => {
        if (user) {
          this.setCurrentUser(user);
        }
      }),
    );
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }

  //Helper method to set the current user and store it in local storage for persistence across page reloads.
  private setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
  }
}
