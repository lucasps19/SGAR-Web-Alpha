import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from '../shared';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  public pessoa = new Pessoa();
  public formularioCadastroUsuario: FormGroup;

  constructor(
    //protected loginService: LoginService,
    protected router: Router,
    protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  protected criarFormulario() {
    this.formularioCadastroUsuario = this.formBuilder.group({
      nome: [this.pessoa.nome],
      cpf: [this.pessoa.cpf],
      email: [this.pessoa.email],
      empresa: [this.pessoa.empresa],
      senha: [this.pessoa.senha]
    });
  }

}
