import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponentComponent } from "./auth-component.component";
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [AuthComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: AuthComponentComponent }]),
    SharedModule
  ]
})
export class AuthModule {}
