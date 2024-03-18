import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  private http;
  public countryList: any[] = [];
  public selectedCountry: any;
  public selectedCountryCode:any;
  public isExistUser: any;


     public userObj = {
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      address1: null,
      address2: null,
      country: null,
      phoneNumber: null
    }
    
    constructor(private httpClient: HttpClient, public router:Router) {
    this.http = httpClient;

  }
  ngOnInit(): void {
    this.loadCountries();
  }
  loadCountries() {
    let api = "https://restcountries.com/v3.1/all";
    this.http.get(api)
      .subscribe((res: any) => {
        console.log(res);
        this.countryList = res;
      });
  }
  submitForm() {
    console.log(this.userObj);
    this.http.get(`http://localhost:8081/user/exist-userName/${this.userObj.userName}`).subscribe(data => {
      console.log(data);
      this.isExistUser = data;
      this.registerUser(this.isExistUser);
    })
  }
  registerUser(isExistUser: any) {
    if (!isExistUser == true) {
      this.http.post("http://localhost:8081/user/add-user", this.userObj).subscribe(data => {
        Swal.fire({
          title: "Success",
          text: `${this.userObj.userName} has been registered`,
          icon: 'success'
        })
        this.router.navigate(['/logIn']);
      })
    } else {
      Swal.fire({
        title: "Can't Register this user",
        text: `${this.userObj.userName} has already been registered !`,
        icon: 'error'
      })
    }
    this.userObj;
  }

  setSelectedCountry(country: any) {
    this.selectedCountry = country;
    this.selectedCountryCode= country.idd.root+""+country.idd.suffixes[0];
    console.log(this.selectedCountryCode);
    console.log(this.selectedCountry);
  }

}
