import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

type NewType = HttpClient;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginComponent, RouterLink, HttpClientModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logInObj:any={
    "email":"",
    "password":""
  }
  constructor(private http:HttpClient, private router:Router){}

  login(){
    this.http.post("http://localhost:8081/login/request-login",this.logInObj).subscribe((res:any)=>{
      console.log(res);
      if(res===true){
        this.router.navigate([`/view-all-book`]);
      }else{
        alert("Your Email or Password is wrong!")
      }
    })
  }

}
