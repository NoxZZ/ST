import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = "http://localhost:3000";

   httpOptions = {
    headers : new HttpHeaders({
      'Content-type' : 'application/json',
    })
  };
  constructor(private http:HttpClient) { }
  
  
  getUsers(){
    return this.http.get(this.url + '/get-user');
  }

  addEmployee() {
    const data : any = { 
      firstName : $('#firstName').val(),
      lastName : $('#lastName').val(),
      EmployeeId : $('#EmployeeId').val()
    }
    return this.http.post(this.url + '/user',data,this.httpOptions)
    .subscribe(res => console.log('data added successfully'));
  }

  

}
