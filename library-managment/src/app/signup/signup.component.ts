import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {AppUser} from "../model/user.model";
interface Role {
  name: string;
  code: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  roles!: Role[];

  selectedRole!: Role;
  newUserFormGroup! : FormGroup;


  constructor(private fb : FormBuilder, private userService:UsersService, private router:Router) { }

  ngOnInit(): void {
    this.roles = [
      { name: 'Student', code: 'NY' },
      { name: 'Professor', code: 'RM' }
    ];

    this.newUserFormGroup=this.fb.group({
      name : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email : this.fb.control(null,[Validators.required, Validators.email]),
      password : this.fb.control(null,[Validators.required, Validators.minLength(8)])
    });
  }

  handleSaveUser() {
    let user:AppUser=this.newUserFormGroup.value;
    this.userService.saveUser(user).subscribe({
      next : data=>{
        alert("Customer has been successfully saved!");
        this.newUserFormGroup.reset();
        this.router.navigateByUrl("/Users");
      },
      error : err => {
        console.log(err);
      }
    });
  }

}
