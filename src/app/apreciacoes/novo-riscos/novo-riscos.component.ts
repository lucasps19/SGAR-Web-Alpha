import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApreciacaoService, CategoriaPerformanceLevelRequerido, CategoriaRisco, CicloVida, Dano, DescricaoCategoria, DescricaoPerformanceLevel, FaixaHRN, FrequenciaExposicao, FrequenciaExposicaoPerigo, GrauPossivelLesao, HRNAntes, HRNDepois, NumeroPessoas, PerformanceLevelRequerido, PossibilidadeEvitarPerigo, Risco, RiscoABNT12100, SeveridadeFerimento, Tarefa, TipoGrupoPerigo } from '..';

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
  public hrnDepois = new HRNDepois();
  public faixaHRN = new FaixaHRN();
  public faixaHRNDepois = new FaixaHRN();
  public descricaoCategoria = new DescricaoCategoria();
  public descricaoPerformanceLevel = new DescricaoPerformanceLevel();
  public severidadeFerimento = new SeveridadeFerimento();
  public frequenciaExposicaoPerigo = new FrequenciaExposicaoPerigo();
  public possibilidadeEvitarPerigo = new PossibilidadeEvitarPerigo();
  public categoriaRisco = new CategoriaRisco();
  public performanceLevelRisco = new PerformanceLevelRequerido();
  public categoriaPerformanceLevelRequerido = new CategoriaPerformanceLevelRequerido();
  public novoRisco = new Risco();
  public idApreciacao: string;
  

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder,
    protected _route: ActivatedRoute,
    protected _router: Router
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.idApreciacao = (this._route.snapshot.paramMap.get('idApreciacao'));
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
      glpHrnDepois: [this.hrnDepois.grauPossivelLesao, Validators.required],
      poHrnDepois: [this.hrnDepois.possibilidadeOcorrencia, Validators.required],
      feHrnDepois: [this.hrnDepois.frequenciaExposicao, Validators.required],
      npHrnDepois: [this.hrnDepois.numeroPessoas, Validators.required],
      valorHrnDepois: [this.hrnDepois.valorCalculado, Validators.required],
      faixaHrnDepois: [this.faixaHRNDepois.descricao, Validators.required],
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
        
        this.hrnAntes.idFaixaHRN = this.faixaHRN.id;
        this.hrnAntes.idGrauPossivelLesao = this.hrnAntes.grauPossivelLesao.id;
        this.hrnAntes.idFrequenciaExposicao = this.hrnAntes.frequenciaExposicao.id;
        this.hrnAntes.idPossibilidadeOcorrencia = this.hrnAntes.possibilidadeOcorrencia.id;
        this.hrnAntes.idNumeroPessoas = this.hrnAntes.numeroPessoas.id;

        this.hrnDepois.grauPossivelLesao = this.hrnAntes.grauPossivelLesao;
        this.hrnDepois.frequenciaExposicao = this.hrnAntes.frequenciaExposicao;
        this.hrnDepois.numeroPessoas = this.hrnAntes.numeroPessoas;
      })
    }
    else{
      alert("Existem campos obrigatorios não preenchidos!");
    }
  }

  public calcularEstimativaHRN(){
    if(this.hrnDepois.grauPossivelLesao != null && this.hrnDepois.possibilidadeOcorrencia != null && this.hrnDepois.frequenciaExposicao != null && this.hrnDepois.numeroPessoas != null){
      this.apreciacaoService.calcularHrnDepois(this.hrnDepois).subscribe(dados => {
        this.hrnDepois = dados;

        this.faixaHRNDepois = this.hrnDepois.faixaHRN;
        
        this.hrnDepois.idFaixaHRN = this.faixaHRNDepois.id;
        this.hrnDepois.idGrauPossivelLesao = this.hrnDepois.grauPossivelLesao.id;
        this.hrnDepois.idFrequenciaExposicao = this.hrnDepois.frequenciaExposicao.id;
        this.hrnDepois.idPossibilidadeOcorrencia = this.hrnDepois.possibilidadeOcorrencia.id;
        this.hrnDepois.idNumeroPessoas = this.hrnDepois.numeroPessoas.id;
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

  public calcularCategoriaPLr(){
    if(this.severidadeFerimento.id != null && this.frequenciaExposicaoPerigo.id != null && this.possibilidadeEvitarPerigo.id != null){

      this.categoriaRisco.severidadeFerimento = this.severidadeFerimento;
      this.categoriaRisco.idSeveridadeFerimento = this.severidadeFerimento.id;
      this.categoriaRisco.frequenciaExposicaoPerigo = this.frequenciaExposicaoPerigo;
      this.categoriaRisco.idFrequenciaExposicaoPerigo = this.frequenciaExposicaoPerigo.id;
      this.categoriaRisco.possibilidadeEvitarPerigo = this.possibilidadeEvitarPerigo;
      this.categoriaRisco.idPossibilidadeEvitarPerigo = this.possibilidadeEvitarPerigo.id;
      
      this.performanceLevelRisco.severidadeFerimento = this.severidadeFerimento;
      this.performanceLevelRisco.idSeveridadeFerimento = this.severidadeFerimento.id;
      this.performanceLevelRisco.frequenciaExposicaoPerigo = this.frequenciaExposicaoPerigo;
      this.performanceLevelRisco.idFrequenciaExposicaoPerigo = this.frequenciaExposicaoPerigo.id;
      this.performanceLevelRisco.possibilidadeEvitarPerigo = this.possibilidadeEvitarPerigo;
      this.performanceLevelRisco.idPossibilidadeEvitarPerigo = this.possibilidadeEvitarPerigo.id;

      this.categoriaPerformanceLevelRequerido.categoriaRisco = this.categoriaRisco;
      this.categoriaPerformanceLevelRequerido.performanceLevelRequerido = this.performanceLevelRisco;

      this.apreciacaoService.calcularCategoriaPLr(this.categoriaPerformanceLevelRequerido).subscribe(dados => {
        this.categoriaPerformanceLevelRequerido = dados;

        this.categoriaRisco = dados.categoriaRisco;
        this.performanceLevelRisco = dados.performanceLevelRequerido;

        this.descricaoCategoria = dados.categoriaRisco.descricaoCategoria;
        this.descricaoPerformanceLevel = dados.performanceLevelRequerido.descricaoPerformanceLevel;
      })
    }
    else{
      alert("Existem campos obrigatorios não preenchidos!");
    }
  }

  public cancelar(){
    this._router.navigate(['editarApreciacao', this.idApreciacao]);
  }

  public salvarNovoRisco(){
    if (this.formularioNovoRisco.valid) {

      this.novoRisco.idAPreciacaoRisco = parseInt(this.idApreciacao);

      this.novoRisco.idCicloVida = this.novoRisco.cicloVida.id;
      this.novoRisco.idTarefa = this.novoRisco.tarefa.id;
      this.novoRisco.idTipoGrupoPerigo = this.novoRisco.tipoGrupoPerigo.id;
      this.novoRisco.idRiscoABNT12100 = this.novoRisco.riscoABNT12100.id;
      this.novoRisco.idDano = this.novoRisco.dano.id;

      this.novoRisco.hrnAntes = this.hrnAntes;
      //this.novoRisco.idHRNAntes = this.hrnAntes.id;

      this.novoRisco.categoriaRisco = this.categoriaRisco;
      //this.novoRisco.idCategoriaRisco = this.categoriaRisco.id;

      this.novoRisco.performanceLevelRequerido = this.performanceLevelRisco;
      //this.novoRisco.idPerformanceLevelRequerido = this.performanceLevelRisco.id;

      this.novoRisco.hrnDepois = this.hrnDepois;
      //this.novoRisco.hrnDepois = this.hrnDepois.id;

      this.apreciacaoService.inserirNovoRisco(this.novoRisco).subscribe(
        response => {
          this.novoRisco = response;
          alert("Risco Inserido com Sucesso");

          this._router.navigate(['editarApreciacao', this.idApreciacao]);
        },
        error => {
          alert("Erro!")
        }
      )

    }else{
      Object.keys(this.formularioNovoRisco.controls).forEach(campo => {
        const controle = this.formularioNovoRisco.get(campo);
        controle.markAsDirty();
      });
    }
  }

}
