import { Routes } from '@angular/router';
import { ViewAllBookComponent } from './page/view-all-book/view-all-book.component';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { ViewAllUsersComponent } from './page/view-all-users/view-all-users.component';
import { ViewAllTransactionsComponent } from './page/view-all-transactions/view-all-transactions.component';
import { BorrowBookComponent } from './page/borrow-book/borrow-book.component';
import { AddBookComponent } from './page/add-book/add-book.component';



export const routes: Routes = [
    {
        path:"logIn",
        component: LoginComponent
    },
    
    {
        path: "view-all-book",
        component: ViewAllBookComponent
    },
    
    {
        path: "signup",
        component: SignUpComponent
    },
    {
        path: "view-all-users",
        component: ViewAllUsersComponent
    },

    {
        path: "borrow-book",
        component: BorrowBookComponent
    },
    {
        path: "add-book",
        component: AddBookComponent
    },

    {
        path: "view-all-transactions",
        component: ViewAllTransactionsComponent
    },
    {
        path: "",
        redirectTo: "logIn",
        pathMatch: "full"
    }
];
