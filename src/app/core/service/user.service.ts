import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../model/Auth';

@Injectable({
  providedIn: 'any'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(user:string, password:string){
    let body = {
      "user":user,
      "password":password
    }
    return this.http.post<Auth>("http://localhost:8080/login", body);
  }

}
