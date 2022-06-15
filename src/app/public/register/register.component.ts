import { Component, OnInit } from '@angular/core';
import { EncryptService } from 'src/app/core/service/encrypt.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName:string;
  lastName:string;
  user:string;
  password:string;
  email:string;

  constructor(private encrypt:EncryptService, private userService:UserService) { }

  ngOnInit(): void {
  }

  register(){
    let encryptPassword = this.encrypt.set(this.password);
    console.log("entro")
    this.userService.register(this.firstName, this.lastName, this.user, encryptPassword, this.email).subscribe((response) =>{
      localStorage.setItem("auth", response.token)
    }, (error) => {
      alert("Error: "+error.error.message)
    });
  }

}
