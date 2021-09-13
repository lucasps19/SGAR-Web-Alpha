import { Routes } from '@angular/router';

import { LoginComponent } from './loginComponent';
import { CadastrarUsuarioComponent } from './cadastrar';

export const LoginRoutes: Routes = [
    {
        path: 'login',
        redirectTo: '/login/loginComponent'
    },
    {
        path: 'login/loginComponent',
        component: LoginComponent
    },
    {
        path: 'login/cadastrar',
        component: CadastrarUsuarioComponent
    }
];