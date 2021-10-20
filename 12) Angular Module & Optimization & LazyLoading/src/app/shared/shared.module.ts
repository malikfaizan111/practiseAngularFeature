import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { PlacholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations:[
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlacholderDirective
    ],
    imports:[CommonModule],
    exports:[
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlacholderDirective,
        CommonModule
    ],
    entryComponents:[AlertComponent]
})
export class SharedModule{

}