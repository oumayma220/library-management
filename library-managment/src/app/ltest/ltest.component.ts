import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TestService} from "../services/test.service";
import {Router} from "@angular/router";
import {books} from "../model/books.model";
import {AppUser} from "../model/user.model";
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-ltest',
  templateUrl: './ltest.component.html',
  styleUrls: ['./ltest.component.css']
})
export class LtestComponent implements OnInit{
  totalItems: number = 100; // Nombre total d'éléments à paginer
  pageSize: number = 10; // Nombre d'éléments par page
  currentPage: number = 0; // Page actuelle
  items: number[] = []; // Tableau d'indices de pages à afficher
  books! : Observable<Array<books>>;
  errorMessage!: string;
  searchFormGroup : FormGroup | undefined;

  constructor(private fb : FormBuilder, private testService:TestService ,private router : Router,public authService:AuthentificationService) { }


  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchBooks();
    this.calculateItems();
  }
  gotoPage(pageIndex: number) {
    this.currentPage = pageIndex;
    // Code pour charger les éléments de la page demandée
  }
  calculateItems() {
    this.items = [];
    for (let i = 0; i < this.totalItems / this.pageSize; i++) {
      this.items.push(i);
    }
  }
  handleSetStatus(b: books) {
    let res=b.status;
    this.testService.setStatus(b.id).subscribe(
      {next:(data)=>{

          b.status=!res;
        },
        error:err => {
          this.errorMessage=err;
        }}
    )
  }


  onPageChange(event: any) {
    this.currentPage = event.page;
    // Code pour charger les éléments de la page demandée
  }

  handleSearchBooks() {
    let kw=this.searchFormGroup?.value.keyword;
    this.books=this.testService.searchBook(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }
  handleNewBook() {
    this.router.navigateByUrl("/admin/newBook")
  }

  handleEditBook(b: books) {
    this.router.navigateByUrl("/admin/editBook/"+b.title)
  }
  handleDeleteBook(c: books) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.testService.deleteBook(c.id).subscribe({
      next : (resp) => {
        this.books=this.books.pipe(
          map(data=>{
            let index=data.indexOf(c);
            data.slice(index,1)
            return data;
          })
        );
      },
      error : err => {
        console.log(err);
      }
    })
  }

}
