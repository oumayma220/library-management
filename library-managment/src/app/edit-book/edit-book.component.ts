import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../services/book.service";
import {books} from "../model/books.model";
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
  bookId!: string;
  book!:books;
  bookFormGroup!:FormGroup;
  ngOnInit():void {


    this.bookService.getBook(this.bookId).subscribe({next:(book)=>{this.book=book;},
    error:(err)=>{console.log(err);}});
    this.bookFormGroup=this.fb.group({title : this.fb.control(this.book.title, [Validators.required,Validators.minLength(4)]),
      status:this.fb.control(this.book.status,[Validators.required])})
    this.bookFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
constructor(private route :ActivatedRoute, public bookService:BookService, private fb:FormBuilder) {
    this.bookId=this.route.snapshot.params['id'];
}

  handleUpdateBook() {
let b=this.bookFormGroup.value;
b.id=this.book.id
this.bookService.updateBook(b).subscribe({next:(book)=>{alert("book updated successfully")},
error:err=>{
  console.log(err);
}})
  }
}
