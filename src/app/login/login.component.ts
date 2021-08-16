import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { RegisterService } from '../register.service';
import {Router} from '@angular/router';
import {User} from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cadastroForm: FormGroup; 

  constructor(
    private _regService: RegisterService ,
    private _route : Router
  ) {

   }

  ngOnInit(): void {
    this.cadastroForm= new FormGroup({
      userName: new FormControl('',[Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(10)
      ]),
      email: new FormControl('',[
                  Validators.required,
                  Validators.email
                  
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  cadastroUser(){
   
    if  (this.cadastroForm.valid && !this.cadastroForm.pending){
      const newUser = this.cadastroForm.getRawValue() as User;
      this._regService.registerUser(newUser).subscribe(
        ()=> console.log("done")
      );
    }
    console.log("TBD")
  }
}
