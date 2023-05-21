import { Component } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm : FormGroup;
  submitted : boolean = false;

  get f(){
    return this.registerForm.controls;
  }

  userDetails : any = {
    Name : "",
    UserName : "",
    Password : "",
    Email : "",
    Role : "",
    Passsword : "",
    ConfirmPassword : ""
  }

  constructor(private _userService : UserService,private _formBuilder : FormBuilder , private _router : Router){
    this.registerForm = this._formBuilder.group({
      name : ['' , Validators.required],
      username : ['' , Validators.required],
      email : ['' , [Validators.required , Validators.email]],
      role : ['' , Validators.required],
      password : ['' , Validators.required],
      confirmPassword : ['' , Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return
    }

    if(this.userDetails.Passsword === this.userDetails.ConfirmPassword){
        this._userService.createNewUser(
          {
            "Name" : this.userDetails.Name,
            "UserName" : this.userDetails.UserName,
            "Email" : this.userDetails.Email,
            "Role" : (this.userDetails.Role).toLowerCase(),
            "Password" : this.userDetails.Passsword
          }
        ).subscribe((response) => {
          console.log(response)
          alert("Registered")

          this._router.navigate(['/login'])
        })
    }else{
      alert("Password do not match")
    }
    
  }

}
