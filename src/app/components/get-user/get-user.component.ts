import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service';
import User from '../../user';
@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {


  users : User[];

  private url : String = 'http://localhost:3000';
  constructor(private http : HttpClient,private  us : UserService) { }

  
  
  ngOnInit() {
    this.us.getUsers().subscribe((data: User[] ) => {
      this.users = data;
    });

  }
}
