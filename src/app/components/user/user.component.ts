import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
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
