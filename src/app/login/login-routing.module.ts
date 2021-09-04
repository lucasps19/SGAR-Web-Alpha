import { Routes } from '@angular/router';

import { LoginComponent } from './loginComponent';

export const LoginRoutes: Routes = [
    {
        path: 'login',
        redirectTo: 'login/loginComponent'
    },
    {
        path: 'login/loginComponent',
        component: LoginComponent
    }
];