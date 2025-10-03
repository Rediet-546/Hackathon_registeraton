import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule,NgIf],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  isLogin = false; // start with 
  
  http=inject(HttpClient)

  registerObj: any={

    "fullname":"string",
    "email":"string",
    "password":"string",
    "collegeName":"string",
    "role":"string"



  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onLoginSubmit(form: any) {
    console.log('Login submitted:', form.value);
  }

  onRegisterSubmit(form: any) {
    console.log('Register submitted:', form.value);
  }

onRegister(){
  this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/register",this.registerObj).subscribe((res:any)=>{})

  
}
}
