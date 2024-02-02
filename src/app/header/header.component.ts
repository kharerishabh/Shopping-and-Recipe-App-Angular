import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataStrorageService } from "../shared/data-storage.service";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false
    authSub: Subscription;

    constructor(private dataStorageService: DataStrorageService, private authService: AuthService){}

    ngOnInit(): void {
        this.authSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user
        })
    }

    onSaveData(){
        this.dataStorageService.storeRecipes()
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe()
    }

    ngOnDestroy(): void {
        this.authSub.unsubscribe()
    }
}