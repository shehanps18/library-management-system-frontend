import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../common/nav/nav.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, NavComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  constructor(private http:HttpClient){

  }

  public book:any={
    isbn: "",
    title: "",
    author: "",
    category: "",
    qty: ""
  }

  addBook() {
    console.log(this.book);
    this.http.post("http://localhost:8080/book/add",this.book).subscribe((data)=>{
      console.log("Add book");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${this.book.title}Book added !`,
        showConfirmButton: false,
        timer: 1500
      });
    })
  }

}
  