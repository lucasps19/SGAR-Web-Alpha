import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService, Pessoa } from '../shared';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public pessoa = new Pessoa();
  public formularioLogin: FormGroup;

  constructor(
    protected loginService: LoginService,
    protected router: Router,
    protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  protected criarFormulario() {
    this.formularioLogin = this.formBuilder.group({
      cpf: [this.pessoa.cpf, Validators.required],
      senha: [this.pessoa.senha, Validators.required]
    });
  }

  public efetuarLogin(){
    this.pessoa.cpf = this.pessoa.cpf.replace(".", "").replace(".", "").replace("-", "");

    this.loginService.efetuarLogin(this.pessoa).subscribe(
      response => {
        this.pessoa = response;
        console.log(response);
        this.router.navigate(['/listarApreciacoes']);
      },
      error => {
        alert("Erro!")
      }
    )
  }

}
