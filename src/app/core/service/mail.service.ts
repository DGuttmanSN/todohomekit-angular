import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class MailService {

  constructor(private http:HttpClient) { }

  sendMail(email:String,asunto:string,nombre:string, apellidos:string, mensaje:string){
    let body = {
      "email":email,
      "asunto":asunto,
      "nombre":nombre,
      "apellidos":apellidos,
      "mensaje":mensaje
    }
    return this.http.post<String>("http://localhost:8080/mail", body);
  }

}
