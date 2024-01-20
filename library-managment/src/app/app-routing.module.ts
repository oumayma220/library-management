import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {BooksComponent} from "./books/books.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthentificationGuard} from "./guards/authentification.guard";
import {NewBookComponent} from "./new-book/new-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {HomeComponent} from "./home/home.component";
import {LtestComponent} from "./ltest/ltest.component";
import {SignupComponent} from "./signup/signup.component";
import {LandingComponent} from "./landing/landing.component";


const routes: Routes = [
  {path : "login", component:LoginComponent},
  {path : "signup", component:SignupComponent},
  {path : "test", component:LtestComponent},
  {path : "home", component:HomeComponent},

  {path : "", component:HomeComponent},
  {path : "admin", component:AdminTemplateComponent,canActivate:[AuthentificationGuard], children : [
      {path : "land", component: LandingComponent},
      {path : "Users", component: UsersComponent},
      {path : "Books", component: BooksComponent},
      {path : "newBook", component: NewBookComponent},
      {path : "editBook/:id", component: EditBookComponent},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
