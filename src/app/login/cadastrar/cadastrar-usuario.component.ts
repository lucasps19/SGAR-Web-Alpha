import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.buscarEmpresasCadastradas();
    this.criarFormulario();
  }

  protected criarFormulario() {
    this.formularioCadastroUsuario = this.formBuilder.group({
      nome: [this.pessoa.nome, Validators.required],
      cpf: [this.pessoa.cpf, Validators.required],
      email: [this.pessoa.email, Validators.required],
      empresa: [this.pessoa.idEmpresa, Validators.required],
      senha: [this.pessoa.senha, Validators.required]
    });
  }

  protected buscarEmpresasCadastradas() {
    this.loginService.buscarEmpresasCadastradas().then(dados => {
      this.listaEmpresasCadastradas = dados;
    })
  }

  public cadastrarUsuario() {
    if (this.formularioCadastroUsuario.valid) {
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
    }else{
      Object.keys(this.formularioCadastroUsuario.controls).forEach(campo => {
        const controle = this.formularioCadastroUsuario.get(campo);
        controle.markAsDirty();
      });
    }
  }

}
