import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = ""

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.url);
  }
}
