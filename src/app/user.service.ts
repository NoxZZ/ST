import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = "http://localhost:3000";

  Posts : Observable<any>; 
   httpOptions = {
    headers : new HttpHeaders({
      'Content-type' : 'application/json',
    })
  };
  constructor(private http:HttpClient) { }
  
  

  addEmployee() {
    const data : any = { 
      firstName : $('#firstName').val(),
      lastName : $('#lastName').val(),
      EmployeeId : $('#EmployeeId').val()
    }
    return this.http.post(this.url + '/user',data,this.httpOptions)
    .subscribe(res => console.log('data added successfully'));
  }


  getUsers(){
    return this.http.get<User[]>(this.url + '/get-user');
  }
}
