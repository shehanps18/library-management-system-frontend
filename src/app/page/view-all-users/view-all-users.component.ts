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
  loadUsers() {
    this.http.get("http://localhost:8081/user/get-all-users").
      subscribe((res: any) => {
        console.log(res);
        this.userList=res;
      })
  }


}
