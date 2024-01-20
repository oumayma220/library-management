import {Component, OnInit} from '@angular/core';
import {BookService} from "../services/book.service";
import {books} from "../model/books.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";
import {Paginator} from "primeng/paginator";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  totalItems: number = 50; // Nombre total d'éléments à paginer

  items: number[] = [];
  books!: Array<books>;
  currentPage:number=0;
  pageSize:number=7;
  totalPages:number=0;
  errorMessage! : String;
  searchFormGroup! : FormGroup;
  currentAction:string="all";
  private paginator: any;
  constructor(public bookService :BookService,private fb:FormBuilder,public authService:AuthentificationService,private router:Router) {}
  ngOnInit() :void{
    this.calculateItems();
    this.handleGetPageBooks() ;
  this.searchFormGroup=this.fb.group({keyword : this.fb.control(null)})}
  handleGetAllBooks(){
    this.bookService.getAllBooks().subscribe({
      next:(data:any[])=>{
        this.books=data;
      },
      error : (err)=>{
        this.errorMessage=err;
      }
    });}
  calculateItems() {
    this.items = [];
    for (let i = 0; i < this.totalItems / this.pageSize; i++) {
      this.items.push(i);
    }
  }
  handleGetPageBooks(){
    this.bookService.getPageBooks(this.currentPage,this.pageSize).subscribe({
      next:(data)=>{
        this.books=data.books;
        this.totalPages=data.totalPages;
      },
      error : (err)=>{
        this.errorMessage=err;
      }
    });}
  deleteriously(b: books) {
    let conf=confirm("Are you sure to delete?");
    if (conf==false) return;
  this.bookService.deleteBook(b.id).subscribe(
    {
      next:(data)=>{ //this.handleGetAllBooks();
        let index=this.books.indexOf(b);
        this.books.splice(index,1);}})}


  handleSetStatus(b: books) {
    let res=b.status;
    this.bookService.setStatus(b.id).subscribe(
      {next:(data)=>{

        b.status=!res;
        },
        error:err => {
          this.errorMessage=err;
        }}
    )
  }

  handleSearchBooks() {
    this.currentAction="search";
    this.currentPage=0;
    let keyword=this.searchFormGroup.value.keyword;
    this.bookService.searchBooks(keyword,this.currentPage,this.pageSize).subscribe(
      {
        next : (data)=>{
          this.books=data.books;
        this.totalPages=data.totalPages;}
      }
    )
  }

  gotoPage(i:number) {
    this.currentPage=i;
    if(this.currentAction=='all')
    this.handleGetPageBooks();
    else
      this.handleSearchBooks();
  }

  handleNewBook() {
 this.router.navigateByUrl("/admin/newBook")
  }

  handleEditBook(b: books) {
    this.router.navigateByUrl("/admin/editBook/"+b.id)
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    // Code pour charger les éléments de la page demandée
  }
}
