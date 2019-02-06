import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { USERS } from '../user/mock-users';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
log(x){
  console.log(x);
}

}
