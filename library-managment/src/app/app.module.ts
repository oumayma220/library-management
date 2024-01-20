import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { NewBookComponent } from './new-book/new-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {HttpClientModule} from "@angular/common/http";
import {PaginatorModule} from "primeng/paginator";
import {CheckboxModule} from "primeng/checkbox";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {TableModule} from "primeng/table";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LtestComponent } from './ltest/ltest.component';
import { SignupComponent } from './signup/signup.component';
import { NewbooktestComponent } from './newbooktest/newbooktest.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    UsersComponent,
    LoginComponent,
    AdminTemplateComponent,
    NewBookComponent,
    EditBookComponent,
    HomeComponent,
    FooterComponent,
    LtestComponent,
    SignupComponent,
    NewbooktestComponent,
    LandingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginatorModule,
    CheckboxModule,
    ProgressSpinnerModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
