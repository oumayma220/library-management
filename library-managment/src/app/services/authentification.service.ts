import { Injectable } from '@angular/core';
import {AppUser} from "../model/user.model";
import {UUID} from "angular2-uuid";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
users :AppUser[]=[];
authenticatedUser: AppUser |undefined;
  constructor() {
    this.users.push({email: "Hassan@gmail.com", id: UUID.UUID(), name: "Hassan",password:"1234",roles:["USER"]});
    this.users.push({email: "Yassine@gmail.com", id:  UUID.UUID(), name: "Yassine",password:"1234",roles:["USER"]});
    this.users.push({email: "houdaelamri555@gmail.com", id:  UUID.UUID(), name: "Houda",password:"123456789",roles:["USER"]});
    this.users.push({email: "admin@gmail.com", id:  UUID.UUID(), name: "admin",password:"1234",roles:["ADMIN","USER"]});
  }
  public login(username:string,password:string):Observable<AppUser>{
    let appUser=this.users.find(u=>u.name==username);
    if(!appUser) return throwError(()=>new Error("User not found"));
    if(appUser.password!=password){
      return throwError(()=>new Error("Bad credentials"));

    }
    return of(appUser);
  }
  public authenticateUser(appUser:AppUser):Observable<boolean>{
    this.authenticatedUser=appUser;
    localStorage.setItem("authUser", JSON.stringify({username:appUser.name,roles:appUser.roles,jwt:"JWT_TOKEN"}));
    return of(true);
  }
  public hasRole(role:string):boolean{
    return this.authenticatedUser!.roles.includes(role);
  }
  public isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }
public logout():Observable<boolean>{
    this.authenticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);
}
}
