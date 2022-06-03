import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, tap } from 'rxjs';

interface UsernameAvailableRes {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  pasword: string;
  passwordConfirmation: string;
}

interface SignupRes {
  username: string;
}

interface SignedInRes {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

interface SigninRes {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiRoot = 'https://api.angular-email.com';
  signedIn$ = new ReplaySubject<boolean>();
  username = '';

  constructor(private http: HttpClient) {}

  isUsernameAvailable(username: string) {
    return this.http.post<UsernameAvailableRes>(
      `${this.apiRoot}/auth/username`,
      {
        username: username,
      }
    );
  }

  signup(creds: SignupCredentials) {
    return this.http.post<SignupRes>(`${this.apiRoot}/auth/signup`, creds).pipe(
      tap(({ username }) => {
        this.signedIn$.next(true);
        this.username = username;
      })
    );
  }

  checkAuth() {
    return this.http.get<SignedInRes>(`${this.apiRoot}/auth/signedin`).pipe(
      tap(({ authenticated, username }) => {
        this.signedIn$.next(authenticated);
        this.username = username;
      })
    );
  }

  signOut() {
    return this.http.post<any>(`${this.apiRoot}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signIn(creds: SigninCredentials) {
    return this.http.post<SigninRes>(`${this.apiRoot}/auth/signin`, creds).pipe(
      tap(({ username }) => {
        this.signedIn$.next(true);
        this.username = username;
      })
    );
  }
}
