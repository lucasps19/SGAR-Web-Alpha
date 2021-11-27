import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApreciacaoService, CicloVida, Risco, Tarefa } from '..';

@Component({
  selector: 'app-riscos',
  templateUrl: './novo-riscos.component.html',
  styleUrls: ['./novo-riscos.component.css']
})
export class NovoRiscosComponent implements OnInit {

  public formularioNovoRisco: FormGroup;
  public listaCicloVida: CicloVida[];
  public listaTarefa: Tarefa[];
  public novoRisco = new Risco();

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarCiclosVida();
  }

  protected criarFormulario() {
    this.formularioNovoRisco = this.formBuilder.group({
      id: [this.novoRisco.id],
      cicloVida: [this.novoRisco.cicloVida, Validators.required],
      tarefa: [this.novoRisco.tarefa, Validators.required],
      atividade: [this.novoRisco.atividade, Validators.required]
    });
  }

  protected buscarCiclosVida(){
    this.apreciacaoService.buscarCiclosVida().then(dados => {
      this.listaCicloVida = dados;
    })
  }

  public buscarTarefas(idCicloVida){
    this.apreciacaoService.buscarTarefas(idCicloVida).then(dados => {
      this.listaTarefa = dados;
    })
  }

}
