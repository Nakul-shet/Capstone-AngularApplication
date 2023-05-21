import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private _router : Router){
  }

  loggedIn() : string{
    if(sessionStorage.getItem("user") != null){
      return "user"
    }else if(sessionStorage.getItem("admin") != null){
      return "admin"
    }else{
      return ""
    }
  }

  logout(){
    alert("Do you want to log out of the application?")
    if(sessionStorage.getItem("user") != null){
      sessionStorage.removeItem("user");
    }else if(sessionStorage.getItem("admin") != null){
      sessionStorage.removeItem("admin");
    }
    
    this._router.navigate(['/login'])
  }

}
