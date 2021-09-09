import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService, Pessoa } from '../shared';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pessoa: Pessoa;

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.pessoa = new Pessoa();
  }

  // efetuarLogin(): void {
  //   const data = {
  //     cpf: this.pessoa.cpf,
  //     senha: this.pessoa.senha
  //   }
  //}

}
