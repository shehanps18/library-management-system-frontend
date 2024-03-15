import { Routes } from '@angular/router';
import { ViewAllBookComponent } from './page/view-all-book/view-all-book.component';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { ViewAllUsersComponent } from './page/view-all-users/view-all-users.component';



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
    }
];
