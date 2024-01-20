import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {AppUser} from "../model/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users! : Observable<Array<AppUser>>;
  errorMessage!: string;
  searchFormGroup : FormGroup | undefined;

  constructor(private userService : UsersService, private fb : FormBuilder, private router : Router) {
  }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchUsers();
  }
  handleSearchUsers() {
    let kw=this.searchFormGroup?.value.keyword;
    this.users=this.userService.searchUsers(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteUser(c: AppUser) {
    let conf = confirm("Are you sure?");
    if(!conf) return;
    this.userService.deleteUser(c.id).subscribe({
      next : (resp) => {
        this.users=this.users.pipe(
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

  handleUserBooks(customer: AppUser) {
    this.router.navigateByUrl("/user-accounts/"+customer.id,{state :customer});
  }
}
