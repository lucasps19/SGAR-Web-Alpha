import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './loginComponent';
import { CadastrarUsuarioComponent } from './cadastrar';
import { NgModule } from '@angular/core';

const routes: Routes = [
    // {
    //     path: '',
    //     component: LoginComponent,
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: 'entrar',
    //             pathMatch: 'full'                
    //         },
    //         {
    //             path: 'entrar',
    //             component: LoginComponent
    //         },
    //         {
    //             path: 'cadastrar',
    //             component: CadastrarUsuarioComponent
    //         }
    //     ]
    // }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
    export class LoginRouting { } 