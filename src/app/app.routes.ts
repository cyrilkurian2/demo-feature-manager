import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import path from 'path';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'user',
        component: UserComponent,
        children:[
            {path: 'login', component: LoginComponent},
        ]
        
    },
    {path: 'home', component: HomeComponent}
];
