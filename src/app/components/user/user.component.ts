import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from 'src/app/user.service';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   firstName = null;
   lastName = null;
   EmployeeId = null;
  private  url : String = 'http://localhost:3000';
  constructor(  private us : UserService, private http : HttpClient) {

  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type' : 'application/json',
    })
  };

  addEmployee() {
    const data : any = { 
      firstName : $('#firstName').val(),
      lastName : $('#lastName').val(),
      EmployeeId : $('#EmployeeId').val(),
      nightS : $('#nightS').val()
    } 
    console.log(data.firstName,data.lastName,data.EmployeeId,data.nightS);
    return this.http.post(this.url + '/user',data,this.httpOptions)
    .subscribe(res => alert(res));

  }
  ngOnInit() {
  }


}
