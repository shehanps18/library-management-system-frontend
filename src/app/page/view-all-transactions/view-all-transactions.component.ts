import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-view-all-transactions',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule, NavComponent],
  templateUrl: './view-all-transactions.component.html',
  styleUrl: './view-all-transactions.component.css'
})
export class ViewAllTransactionsComponent implements OnInit {
  public allTransactions:any=[];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.loadTransactions();
  }
  loadTransactions() {
    this.http.get("http://localhost:8082/get-all").subscribe(res=>{
      console.log(res);
      this.allTransactions=res;
    });
  }

}
