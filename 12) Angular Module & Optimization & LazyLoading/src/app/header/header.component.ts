import { Subject, Subscription } from "rxjs";
import { Component, OnDestroy, OnInit } from "@angular/core";

import { DataStorageService } from "../shared/data-storage.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthServices } from "../auth-component/auth.services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit , OnDestroy{
  
   private userSub: Subscription;
   isAuthenticated = false;
  constructor(
    private dataStorageService: DataStorageService, private authServices : AuthServices
    // private route: ActivatedRoute,
    // private router: Router
  ) {}


  ngOnInit()
  {
    this.userSub = this.authServices.user.subscribe(user =>
      {
      //  this.isAuthenticated = !user ? false : true;  
       this.isAuthenticated = !!user;
       console.log(!user);
       console.log(!!user);
      })
  }
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  deleteData() {
    this.dataStorageService.deleteRecipes().subscribe();
    // this.router.navigate(["shopping-list"], { relativeTo: this.route });
  }
  onLogout(){
    this.authServices.logout();
  }
  ngOnDestroy()
  {
    this.userSub.unsubscribe();
  }

}
