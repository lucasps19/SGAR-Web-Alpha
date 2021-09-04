import { Component, OnInit } from '@angular/core';

import { LoginService, Pessoa } from '../shared';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pessoa: Pessoa;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

  // efetuarLogin(cpf: string, senha: string){
  //   return this.loginService.efetuarLogin(cpf, senha);
  // }

}
