import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApreciacaoService, CategoriaRisco, CicloVida, Dano, DescricaoCategoria, DescricaoPerformanceLevel, FaixaHRN, FrequenciaExposicao, FrequenciaExposicaoPerigo, GrauPossivelLesao, HRNAntes, NumeroPessoas, PerformanceLevelRequerido, PossibilidadeEvitarPerigo, Risco, RiscoABNT12100, SeveridadeFerimento, Tarefa, TipoGrupoPerigo } from '..';

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
  public eletricaOuFluidos: any[];
  public envolveEletricaOuFluidos: boolean;
  public hrnAntes = new HRNAntes();
  public faixaHRN = new FaixaHRN();
  public descricaoCategoria = new DescricaoCategoria();
  public descricaoPerformanceLevel = new DescricaoPerformanceLevel();
  public severidadeFerimento = new SeveridadeFerimento();
  public frequenciaExposicaoPerigo = new FrequenciaExposicaoPerigo();
  public possibilidadeEvitarPerigo = new PossibilidadeEvitarPerigo();
  // public categoriaRisco = new CategoriaRisco();
  // public performanceLevelRisco = new PerformanceLevelRequerido();
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
    this.eletricaOuFluidos = [{label: 'Não', value: false}, {label: 'Sim', value: true}];
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
      medidasProtecaoSugeridas: [this.novoRisco.medidaProtecaoSugerida, Validators.required],
      envolveEletricaOuFluidos: [this.envolveEletricaOuFluidos, Validators.required],
      severidadeFerimento: [this.severidadeFerimento],
      frequenciaExposicaoPerigo: [this.frequenciaExposicaoPerigo],
      possibilidadeEvitarPerigo: [this.possibilidadeEvitarPerigo],
      categoriaRisco: [this.descricaoCategoria.descricao],
      performanceLevelRisco: [this.descricaoPerformanceLevel.descricao]
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

  public SolucaoEnvolveEletricaOuFluidos(){
    if(this.envolveEletricaOuFluidos){
      document.getElementById('divCatPlr').removeAttribute('class');
    }
    else{
      document.getElementById('divCatPlr').setAttribute('class', 'ocultar');
    }
  }

}
