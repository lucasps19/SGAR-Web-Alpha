import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRoutes } from './login/login-routing.module';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login/loginComponent',
        pathMatch: 'full'
    },
    ...LoginRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModules {}
