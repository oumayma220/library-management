import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit{
  constructor(public authService:AuthentificationService,public router:Router) {
  }
  ngOnInit():void {
  }


  handleLogout() {
    this.authService.logout().subscribe({next:(data)=>{
      this.router.navigateByUrl("/home")
      }})
  }
}
