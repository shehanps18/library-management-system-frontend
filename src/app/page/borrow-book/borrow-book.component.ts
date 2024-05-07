import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../common/nav/nav.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrow-book',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, NavComponent],
  templateUrl: './borrow-book.component.html',
  styleUrl: './borrow-book.component.css'
})
export class BorrowBookComponent {
  public user: any;
  public bookRes: any;
  public cartList: any = [];

  public userName: String = "";


  bookId: any = null;

  constructor(private http: HttpClient) {
    this.http = http;
  }


  searchUser() {
    console.log(this.userName);
    this.http.get("http://localhost:8081/user/find-user-name/" + this.userName).subscribe((data) => {
      console.log(data);
      this.user = data;
    })
  }
  searchBook() {
    this.http.get(`http://localhost:8080/book/search/${this.bookId}`).subscribe(res => {
      console.log(res);
      this.bookRes = res;
      Swal.fire({
        title: `"${this.bookRes.title}" Do you want to get this book?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          this.cartList.push(this.bookRes);
          this.bookRes = {};
          console.log(this.cartList);

        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    })
  }

  bookIds: any = [];

  loadBookIds() {
    this.cartList.forEach((element: any) => {
      this.bookIds.push(element.id);
    });
  }

  borrowBooks() {
    this.loadBookIds();
    const borrowBook: any = {
      borrowId: this.user.id,
      books: this.bookIds,
      date: new Date(),
      fine: ""
    }
    console.log(borrowBook);
    this.http.post("http://localhost:8082/add-borrow-details", borrowBook).subscribe((res) => {
      console.log(res);

    })

  }

}
