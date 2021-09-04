import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRoutes } from './login/login-routing.module';

export const routes: Routes = [
    ...LoginRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModules {}
