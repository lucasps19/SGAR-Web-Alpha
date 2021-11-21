import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarApreciacoesComponent, NovaApreciacaoComponent, NovoEquipamentoComponent, RiscosComponent } from './apreciacoes';
import { ListarApreciacoesComponent } from './apreciacoes/listar-apreciacoes';
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
    },
    {
        path: 'listarApreciacoes',
        component: ListarApreciacoesComponent
    },
    {
        path: 'novaApreciacao',
        component: NovaApreciacaoComponent
    },
    {
        path: 'editarApreciacao/:idApreciacao',
        component: EditarApreciacoesComponent
    },
    {
        path: 'risco',
        component: RiscosComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModules { }
