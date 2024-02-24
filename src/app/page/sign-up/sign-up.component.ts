import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  private http;
  countryList:any[]=[];


  constructor(private httpClient: HttpClient){
    this.http= httpClient;

  }
  ngOnInit(): void {
    this.loadCountries();
  }
  loadCountries(){
    let api= "https://restcountries.com/v3.1/all";
    this.http.get(api)
    .subscribe((res:any)=>{
      console.log(res);
      this.countryList=res;
    });
  }

}
