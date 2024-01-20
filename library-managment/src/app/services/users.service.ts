import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {AppUser} from "../model/user.model";
import {environment} from "../../environments/enviornment";



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  public getUsers():Observable<Array<AppUser>>{
    return this.http.get<Array<AppUser>>(environment.backendHost+"/users")
  }
  public searchUsers(keyword : string):Observable<Array<AppUser>>{
    return this.http.get<Array<AppUser>>(environment.backendHost+"/users/search?keyword="+keyword)
  }
  public saveUser(user: AppUser):Observable<AppUser>{
    return this.http.post<AppUser>(environment.backendHost+"/users",user);
  }
  public deleteUser(id: string){
    return this.http.delete(environment.backendHost+"/users/"+id);
  }



}
