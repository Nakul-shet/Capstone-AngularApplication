import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  createNewUser(user : IUser) : Observable<IUser>{
    return this._http.post<IUser>("http://localhost:5170/api/User/CreateUser" , user)
  }

  getAllUsers() : Observable<IUser[]>{
    return this._http.get<IUser[]>("http://localhost:5170/api/User/GetAllUsers")
  }

  login(username : string){
    return this._http.get(`http://localhost:5170/api/User/GetUserByUsername?name=${username}`)
  }
}
