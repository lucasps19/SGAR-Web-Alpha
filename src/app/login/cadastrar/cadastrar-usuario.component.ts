import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresa, LoginService, Pessoa } from '../shared';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  public pessoa = new Pessoa();
  public formularioCadastroUsuario: FormGroup;
  public listaEmpresasCadastradas: Empresa[];

  constructor(
    protected loginService: LoginService,
    protected router: Router,
    protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarEmpresasCadastradas();
  }

  protected criarFormulario() {
    this.formularioCadastroUsuario = this.formBuilder.group({
      nome: [this.pessoa.nome],
      cpf: [this.pessoa.cpf],
      email: [this.pessoa.email],
      empresa: [this.pessoa.idEmpresa],
      senha: [this.pessoa.senha]
    });
  }

  protected buscarEmpresasCadastradas(){
    debugger;
    this.loginService.buscarEmpresasCadastradas().subscribe(
      response => {
        this.listaEmpresasCadastradas = response;
      },
      error => {
        console.log(error);
        alert("Erro!");
      }
    )
  }

  public cadastrarUsuario(){
    this.pessoa.cpf = this.pessoa.cpf.replace(".", "").replace(".", "").replace("-", "");

    this.loginService.cadastrarUsuario(this.pessoa).subscribe(
      response => {
        console.log(response);
        alert("Cadastro realizado com Sucesso");
      },
      error => {
        console.log(error);
        alert("Erro!");
      }
    )
  }

}
