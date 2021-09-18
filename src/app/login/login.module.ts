import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './loginComponent';
import { LoginService } from './shared';

import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { CadastrarUsuarioComponent } from './cadastrar';
import { InputTextModule } from 'primeng/inputtext';
import { LoginRouting } from './login-routing.module';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    LoginComponent,
    CadastrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputMaskModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule,
    LoginRouting
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
