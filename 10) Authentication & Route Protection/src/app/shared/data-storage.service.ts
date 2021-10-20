import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthServices } from '../auth-component/auth.services';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authServices : AuthServices) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-project-recipe-book-6c28b-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  // fetchRecipes() {
  //  return this.http
  //     .get<Recipe[]>(
  //       'https://ng-project-recipe-book-6c28b-default-rtdb.firebaseio.com/recipes.json'
  //     )
  //     .pipe(map(recipes=>{
  //       return recipes.map(recipe =>{
  //         return {
  //           ...recipe,
  //           ingredients: recipe.ingredients ? recipe.ingredients : []
  //         };
  //       });
  //     }), tap(recipes =>
  //       {
  //         this.recipeService.setRecipes(recipes);
  //       })
  //     )
  // }

// using  behaviour Subject and take and exhaustMap Method
  //   fetchRecipes() {
  //   return this.authServices.user.pipe(take(1),exhaustMap(user=>{
  //      return this.http
  //      .get<Recipe[]>(
  //        'https://ng-project-recipe-book-6c28b-default-rtdb.firebaseio.com/recipes.json',
  //        {
  //          params : new HttpParams().set('auth',user.token)
  //        }
  //      )
  //    }),
  //    map(recipes=>{
  //      return recipes.map(recipe =>{
  //        return {
  //          ...recipe,
  //          ingredients: recipe.ingredients ? recipe.ingredients : []
  //        };
  //      });
  //    }), tap(recipes =>
  //      {
  //        this.recipeService.setRecipes(recipes);
  //      }));
    
       
  //  }

  //  using Interceptor
   fetchRecipes() {
       return this.http
       .get<Recipe[]>(
         'https://ng-project-recipe-book-6c28b-default-rtdb.firebaseio.com/recipes.json',
       ).pipe(map(recipes=>{
       return recipes.map(recipe =>{
         return {
           ...recipe,
           ingredients: recipe.ingredients ? recipe.ingredients : []
         };
       });
     }), tap(recipes =>
       {
         this.recipeService.setRecipes(recipes);
       }));    
   }


  deleteRecipes()
{
  return this.http.delete<Recipe[]>('https://ng-project-recipe-book-6c28b-default-rtdb.firebaseio.com/recipes.json')
  .pipe(tap(recipes=>{
  this.recipeService.setRecipes(recipes);
  })
  )
  }
}
