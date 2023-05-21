import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _userService : UserService , private _router : Router){}

  userObj : any = {
    username : "",
    password : ""
  }

  login(){

    if(this.userObj.username != "" && this.userObj.password != ""){
      this._userService.login(this.userObj.username).subscribe((response : any) => {
        if(response != null){
          console.log(response)
          if(response[0].password == this.userObj.password && response[0].role == 'user'){
            sessionStorage.setItem("user" , this.userObj.username);
            this._router.navigate(["/medicine"])
          }else if(response[0].password == this.userObj.password && response[0].role == 'admin'){
            sessionStorage.setItem("admin" , this.userObj.username);
            this._router.navigate(["/AdminDashboard"])
          }
        }
      })
    }
  }

}
