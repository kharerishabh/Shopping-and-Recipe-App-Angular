import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth/auth.service';
import { AppState } from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions'
import { FetchRecipes, StoreRecipes } from '../recipes/store/recipes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  authSub: Subscription;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.authSub = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
      });
  }

  onSaveData() {
    // this.dataStorageService.storeRecipes();
    this.store.dispatch(StoreRecipes())
  }

  onFetchData() {
    // this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(FetchRecipes())
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout())
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
}
