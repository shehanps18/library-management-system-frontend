import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { ViewAllBookComponent } from './page/view-all-book/view-all-book.component';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { BorrowBookComponent } from './page/borrow-book/borrow-book.component';
import { AddBookComponent } from './page/add-book/add-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,ViewAllBookComponent,LoginComponent,SignUpComponent,BorrowBookComponent,AddBookComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library-manage--frontend-new1';
}
