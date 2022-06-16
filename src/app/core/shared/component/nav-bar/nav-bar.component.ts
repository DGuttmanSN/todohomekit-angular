import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loged: boolean;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("auth")){
      this.loged = true;
    } else {
      this.loged = false;
    }
  }

  mostrarOcultar(){
    let navegador = document.getElementById("navegador");
    if(navegador!.classList.contains("hidden-nav")){
      navegador!.classList.remove("hidden-nav");
      navegador!.classList.add("nav");
    } else {
      navegador!.classList.remove("nav");
      navegador!.classList.add("hidden-nav");
    }
  }

  logout(){
    localStorage.removeItem("auth");
    this.loged = false;
    location.reload();
  }

}
