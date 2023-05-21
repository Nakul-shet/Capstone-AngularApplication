import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users : any = [];

  constructor(private _userServices : UserService){

  }

  ngOnInit(){

    this._userServices.getAllUsers().subscribe((result) => {
      console.log(result);

      this.users = result
    })
  }

}
