import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptService } from 'src/app/core/service/encrypt.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:string;
  password:string;

  constructor(private encrypt:EncryptService, private userService:UserService, private _router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let encryptPassword = this.encrypt.set(this.password);
    this.userService.login(this.user, encryptPassword).subscribe((response) =>{
      localStorage.setItem("auth", response.token)
      this._router.navigate([''])
    }, (error) => {
      alert("Error: "+error.error.message)
    });
  }

}
