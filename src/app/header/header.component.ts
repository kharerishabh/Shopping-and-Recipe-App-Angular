import { Component, EventEmitter, Output } from "@angular/core";
import { DataStrorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent {
    constructor(private dataStorageService: DataStrorageService){}

    onSaveData(){
        this.dataStorageService.storeRecipe()
    }
}