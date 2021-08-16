import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './login/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  API = "http://localhost:3000";
  constructor(private _httpClient: HttpClient) { }
  registerUser(newUser : User){
    return this._httpClient.post(this.API+'/posts/',newUser)
  }
}
