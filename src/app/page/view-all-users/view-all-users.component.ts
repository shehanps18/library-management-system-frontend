import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-users',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './view-all-users.component.html',
  styleUrl: './view-all-users.component.css'
})
export class ViewAllUsersComponent implements OnInit {
  constructor(private http: HttpClient) { }

  userList: any[] = [];

  ngOnInit(): void {
    this.loadUsers();
  }
  
  private baseUrl:String = "http://localhost:8081";

  public selectedUser:any={
    "id":null,
    "firstName":null,
    "lastName": null,
    "userName":null,
    "email":null,
    "address1": null,
    "address2":null,
    "country": null,
    "phoneNumber":null
  }

  loadUsers() {
    this.http.get("http://localhost:8081/user/get-all-users").
      subscribe((res: any) => {
        console.log(res);
        this.userList=res;
      })
  }

  public saveUser(){

  }

  public removeUser(){
    this.http.delete(this.baseUrl+"/user/delete/"+this.selectedUser.id).
    subscribe(data=>{
      console.log(data);
      this.loadUsers();
    });
  }
  
  setSelectedUser(user:any){
    this.selectedUser=user;
  }


}
