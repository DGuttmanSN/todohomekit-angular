import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/core/service/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  email:String;
  asunto:string;
  nombre:string;
  apellidos:string;
  mensaje:string;

  constructor(private mailService:MailService) { }

  ngOnInit(): void {
  }

  enviar() {
    this.mailService.sendMail(this.email, this.asunto, this.nombre, this.apellidos, this.mensaje).subscribe((response) => {
      console.log(response);
    })
  }

}
