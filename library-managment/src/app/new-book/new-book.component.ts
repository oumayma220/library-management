import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit{
  bookFormGroup! :FormGroup;
  constructor(private fb : FormBuilder, public bookService:BookService) {
  }
  ngOnInit():void {
    this.bookFormGroup=this.fb.group({title : this.fb.control(null, [Validators.required,Validators.minLength(4)]),
                                             status:this.fb.control(false,[Validators.required])})
                                                                                                               }

  handleAddBook() {
let book=this.bookFormGroup.value;
this.bookService.addNewBook(book).subscribe({
  next:(data)=>{
    alert("book added successfully");
    this.bookFormGroup.reset();
  },error:err=>{
    console.log(err);
  }
})
  }


}
