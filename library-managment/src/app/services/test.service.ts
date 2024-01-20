import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {books} from "../model/books.model";
import {environment} from "../../environments/enviornment";
import {AppUser} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private books!:Array<books>;
  constructor(private http : HttpClient) { }

 /* public getBook(accountId : string, page : number, size : number):Observable<books>{
    return this.http.get<books>(environment.backendHost+"/books/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }
  public searchBook(keyword : string):Observable<Array<books>>{
    return this.http.get<Array<books>>(environment.backendHost+"/books/search?keyword="+keyword)
  }

  public addBook(book: books):Observable<books>{
    return this.http.post<books>(environment.backendHost+"/books/add",book);
  }
  public deleteBook(id: string){
    return this.http.delete(environment.backendHost+"/books/"+id);
  }*/
  private readonly baseUrl = 'backendHost';



  public deleteBook(bookId: string): Observable<void> {
    const url = `${this.baseUrl}/${bookId}`;
    return this.http.delete<void>(url);
  }

  public updateBook(bookId: string, bookDTO: books): Observable<books> {
    const url = `${this.baseUrl}/${bookId}`;
    return this.http.put<books>(url, bookDTO);
  }

 /* public saveBook(bookDTO: books): Observable<books> {
    return this.http.post<books>(this.baseUrl, bookDTO);
  }*/

  public addBook(book: books): Observable<books> {
    const url = `${this.baseUrl}/add`;
    return this.http.post<books>(url, book);
  }
  public searchBook(keyword : string):Observable<Array<books>>{
    return this.http.get<Array<books>>(environment.backendHost+"/books/search?keyword="+keyword)
  }
  public saveBook(book: books):Observable<books>{
    return this.http.post<books>(environment.backendHost+"/books",book);
  }
  setStatus(id:string) :Observable<boolean>{
    let book = this.books.find(b=>b.id==id);
    if(book !=undefined){
      book.status=!book.status;
      return of(true);
    } else return throwError(()=>Error("book not found"));
  }
}

