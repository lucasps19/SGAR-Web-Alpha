import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApreciacaoService, CicloVida, Dano, Risco, RiscoABNT12100, Tarefa, TipoGrupoPerigo } from '..';

@Component({
  selector: 'app-riscos',
  templateUrl: './novo-riscos.component.html',
  styleUrls: ['./novo-riscos.component.css']
})
export class NovoRiscosComponent implements OnInit {

  public formularioNovoRisco: FormGroup;
  public listaCicloVida: CicloVida[];
  public listaTarefa: Tarefa[];
  public listaTipoGrupoPerigo: TipoGrupoPerigo[];
  public listaDano: Dano[];
  public listaRiscosABNT12100: RiscoABNT12100[];
  public novoRisco = new Risco();

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarCiclosVida();
    this.buscarTipoGrupoPerigo();
    this.buscarRiscosABNT12100();
  }

  protected criarFormulario() {
    this.formularioNovoRisco = this.formBuilder.group({
      id: [this.novoRisco.id],
      cicloVida: [this.novoRisco.cicloVida, Validators.required],
      tarefa: [this.novoRisco.tarefa, Validators.required],
      atividade: [this.novoRisco.atividade, Validators.required],
      tipoGrupoPerigo: [this.novoRisco.tipoGrupoPerigo, Validators.required],
      dano: [this.novoRisco.dano, Validators.required],
      onde: [this.novoRisco.onde, Validators.required],
      riscoABNT12100: [this.novoRisco.riscoABNT12100, Validators.required]
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

  public buscarTipoGrupoPerigo(){
    this.apreciacaoService.buscarTipoGrupoPerigo().then(dados => {
      this.listaTipoGrupoPerigo = dados;
    })
  }

  public buscarDanos(idTipoGrupoPerigo){
    this.apreciacaoService.buscarDanos(idTipoGrupoPerigo).then(dados => {
      this.listaDano = dados;
    })
  }

  public buscarRiscosABNT12100(){
    this.apreciacaoService.buscarRiscosABNT12100().then(dados => {
      this.listaRiscosABNT12100 = dados;  
    })
  }

}
