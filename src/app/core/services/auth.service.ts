import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User, auth } from 'firebase';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  public authenticatedUser: User;
  public isAuthenticatedUser: boolean = false;
  userLoginChange: Subject<boolean> = new Subject<boolean>();
  constructor(
    public router: Router,
    public ngZone: NgZone,
    public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user != null) {
        this.authenticatedUser = user;
      }
    });
  }
  OAuthProvider(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then(() => {
        this.isAuthenticatedUser = true;
        this.userLoginChange.next(this.isAuthenticatedUser);
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        });
      }).catch((error) => {
        window.alert(error)
      })
  }
  SigninWithGoogle() {
    return this.OAuthProvider(new auth.GoogleAuthProvider())
      .then(() => {
        console.log('Successfully logged in!');
      }).catch(error => {
        console.log(error)
      });
  }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['']);
    })
  }
  canActivate(): boolean {
    if (this.authenticatedUser == null) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  isAuthenticated(): Observable<User> {
    return this.afAuth.authState;
  }
}
