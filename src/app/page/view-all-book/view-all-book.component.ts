import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-view-all-book',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-all-book.component.html',
  styleUrl: './view-all-book.component.css'
})
export class ViewAllBookComponent implements OnInit {
  private http;
  public selectedBook: any;
  bookList: any[] = [];
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadBooks();
  }
  loadBooks() {
    this.http.get<any[]>("http://localhost:8080/book/get").
      subscribe((data) => {
        this.bookList = data;
        console.log(this.bookList);
      });
  }
  public removeBook() {
    let apiUrl = "http://localhost:8080/book/delete/" + this.selectedBook.id;
    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadBooks();
        this.selectedBook=null;
      });
    
  }
  // deleteBook({ book }: { book: any; }) {
  //     alert("delete")
  //   }
  setSelectedBook(book: any) {
    this.selectedBook = book;
    console.log("setSelectedBook" + book.id)
  }
  public saveBook() {
    let postApi = "http://localhost:8080/book/add";
    this.http.post(postApi,this.selectedBook)
      .subscribe((date) => {
        console.log("saved!");
        this.loadBooks();
        this.selectedBook = {};
        
      });
  }

}
