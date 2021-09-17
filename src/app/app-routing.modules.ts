import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarUsuarioComponent } from './login/cadastrar';

import { LoginComponent } from './login/loginComponent';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, 
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastrar',
        component: CadastrarUsuarioComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModules { }
