import { Component, OnInit } from '@angular/core';
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

  constructor(private encrypt:EncryptService, private userService:UserService) { }

  ngOnInit(): void {
  }

  login(){
    let encryptPassword = this.encrypt.set(this.password);
    console.log(encryptPassword);
    this.userService.login(this.user, encryptPassword).subscribe((response) =>{
      localStorage.setItem("auth", response.token)
    });
  }

}
