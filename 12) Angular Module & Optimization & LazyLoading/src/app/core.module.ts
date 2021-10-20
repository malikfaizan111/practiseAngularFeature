import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth-component/auth-interceptor.services";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
    providers:[ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}]
})
export class CoreModule{

}