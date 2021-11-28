import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApreciacaoService, CicloVida, Dano, FaixaHRN, FrequenciaExposicao, FrequenciaExposicaoPerigo, GrauPossivelLesao, HRNAntes, NumeroPessoas, PossibilidadeEvitarPerigo, Risco, RiscoABNT12100, SeveridadeFerimento, Tarefa, TipoGrupoPerigo } from '..';

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
  public listaGLP: GrauPossivelLesao[];
  public listaPO: PossibilidadeEvitarPerigo[];
  public listaFE: FrequenciaExposicao[];
  public listaNP: NumeroPessoas[];
  public listaSeveridadesFerimento: SeveridadeFerimento[];
  public listaFrequenciaExposicaoPerigo: FrequenciaExposicaoPerigo[];
  public listaPossibilidadesEvitarPerigo: PossibilidadeEvitarPerigo[];
  public hrnAntes = new HRNAntes();
  public faixaHRN = new FaixaHRN();
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
    this.buscarGLPHRN();
    this.buscarPOHRN();
    this.buscarFEHRN();
    this.buscarNPHRN();
    this.buscarSeveridadesFerimento();
    this.buscarFrequenciasExposicaoPerigo();
    this.buscarPossibilidadesEvitarPerigo();
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
      riscoABNT12100: [this.novoRisco.riscoABNT12100, Validators.required],
      glpHrnAntes: [this.hrnAntes.grauPossivelLesao, Validators.required],
      poHrnAntes: [this.hrnAntes.possibilidadeOcorrencia, Validators.required],
      feHrnAntes: [this.hrnAntes.frequenciaExposicao, Validators.required],
      npHrnAntes: [this.hrnAntes.numeroPessoas, Validators.required],
      valorHrnAtual: [this.hrnAntes.valorCalculado, Validators.required],
      faixaHrnAtual: [this.faixaHRN.descricao, Validators.required],
      medidasProtecaoSugeridas: [this.novoRisco.medidaProtecaoSugerida, Validators.required]
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

  public buscarGLPHRN(){
    this.apreciacaoService.buscarGLPHRN().then(dados => {
      this.listaGLP = dados;
    })
  }

  public buscarPOHRN(){
    this.apreciacaoService.buscarPOHRN().then(dados => {
      this.listaPO = dados;
    })
  }

  public buscarFEHRN(){
    this.apreciacaoService.buscarFEHRN().then(dados => {
      this.listaFE = dados;
    })
  }

  public buscarNPHRN(){
    this.apreciacaoService.buscarNPHRN().then(dados => {
      this.listaNP = dados;
    })
  }

  public calcularHRN(){
    if(this.hrnAntes.grauPossivelLesao != null && this.hrnAntes.possibilidadeOcorrencia != null && this.hrnAntes.frequenciaExposicao != null && this.hrnAntes.numeroPessoas != null){
      this.apreciacaoService.calcularHrnAntes(this.hrnAntes).subscribe(dados => {
        this.hrnAntes = dados;
  
        this.faixaHRN = this.hrnAntes.faixaHRN;
      })
    }
    else{
      alert("Existem campos obrigatorios não preenchidos!");
    }
  }

  public buscarSeveridadesFerimento(){
    this.apreciacaoService.buscarSeveridadesFerimento().then(dados => {
      this.listaSeveridadesFerimento = dados;
    })
  }

  public buscarFrequenciasExposicaoPerigo(){
    this.apreciacaoService.buscarFrequenciasExposicaoPerigo().then(dados => {
      this.listaFrequenciaExposicaoPerigo = dados;
    })
  }

  public buscarPossibilidadesEvitarPerigo(){
    this.apreciacaoService.buscarPossibilidadesEvitarPerigo().then(dados => {
      this.listaPossibilidadesEvitarPerigo = dados;
    })
  }

}
