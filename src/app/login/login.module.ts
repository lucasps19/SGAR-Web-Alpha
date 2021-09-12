import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './loginComponent';
import { cadastrarComponent } from './cadastrarComponent';
import { LoginService } from './shared';

import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    LoginComponent,
    cadastrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputMaskModule,
    PasswordModule,
    ButtonModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
