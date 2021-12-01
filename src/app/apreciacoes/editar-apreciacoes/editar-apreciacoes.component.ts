import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipamento, ApreciacaoRisco, ApreciacaoService, NovoEquipamentoComponent, Risco, TabelaRiscos } from '..';
import { Pessoa } from 'src/app/login/shared';
import { DialogService } from 'primeng/dynamicdialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-apreciacoes',
  templateUrl: './editar-apreciacoes.component.html',
  styleUrls: ['./editar-apreciacoes.component.css'],
  providers: [DialogService]
})
export class EditarApreciacoesComponent implements OnInit {

  public formularioEditarApreciacao: FormGroup;
  public editarApreciacao = new ApreciacaoRisco();
  public idApreciacao: string;
  public listaEquipamentos: Equipamento[];
  public listaPessoasPorEmpresa: Pessoa[];
  public listaRiscos: TabelaRiscos[];
  public colunas: any[];
  public _colunasSelecionadas: any[];

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder,
    public dialogService: DialogService,
    protected _route: ActivatedRoute,
    protected _router: Router
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarEquipamentosCadastrados();
    this.buscarPessoasPorEmpresa();
    this.idApreciacao = (this._route.snapshot.paramMap.get('idApreciacao'));
    this.buscarApreciacao();
    this.buscarListaRiscos();

    this.colunas = [
      { field: 'cicloVida', header: 'Ciclo de Vida '},
      { field: 'tarefa', header: 'Tarefa'},
      { field: 'atividade', header: 'Atividade'},
      { field: 'tipoGrupoPerigo', header: 'Tipo Grupo/Perigo'},
      { field: 'dano', header: 'Dano'},
      { field: 'onde', header: 'Onde'},
      { field: 'riscoABNT12100', header: 'Risco'},
      { field: 'valorCalculadoHRNAntes', header: 'HRN'},
      { field: 'faixaHRNAntes', header: 'Faixa HRN'},
      { field: 'categoria', header: 'Categoria'},
      { field: 'performanceLevelRequerido', header: 'PLr'},
      { field: 'medidaProtecaoSugerida', header: 'Medidas de Proteção Sugeridas'},
      { field: 'valorCalculadoHRNDepois', header: 'Estimativa HRN'},
      { field: 'faixaHRNDepois', header: 'Faixa Estimada HRN'}
    ]

    this._colunasSelecionadas = this.colunas;
  }

  protected criarFormulario() {
    this.formularioEditarApreciacao = this.formBuilder.group({
      id: [this.editarApreciacao.id, Validators.required],
      equipamento: [this.editarApreciacao.equipamento, Validators.required],
      dataApreciacao: [this.editarApreciacao.dataApreciacao, Validators.required],
      limiteUso: [this.editarApreciacao.limiteUso, Validators.required],
      limiteEspaco: [this.editarApreciacao.limiteEspaco, Validators.required],
      limiteTempo: [this.editarApreciacao.limiteTempo, Validators.required],
      participantes: [this.editarApreciacao.pessoas, Validators.required]
    });
  }

  protected buscarEquipamentosCadastrados(){
    this.apreciacaoService.buscarEquipamentosCadastrados(localStorage.getItem("idEmpresaUsuarioLogado")).then(dados => {
      this.listaEquipamentos = dados;
    })
  }

  protected buscarPessoasPorEmpresa(){
    this.apreciacaoService.buscarPessoasPorEmpresa(localStorage.getItem("idEmpresaUsuarioLogado")).then(dados => {
      this.listaPessoasPorEmpresa = dados;
    })
  }

  protected buscarApreciacao(){
    this.apreciacaoService.buscarApreciacao(this.idApreciacao).then(dados => {
      this.editarApreciacao = dados;
      this.editarApreciacao.dataApreciacao = new Date(dados.dataApreciacao);
    })
  }

  protected buscarListaRiscos(){
    this.apreciacaoService.buscarListaRiscos(parseInt(this.idApreciacao)).then(dados => {
      this.listaRiscos = dados;
    })
  }

  public NovoEquipamento() {
    const ref = this.dialogService.open(NovoEquipamentoComponent, {
        header: 'Adicionar um novo equipamento',
        width: '500px'
    });

    ref.onClose.subscribe(function(){
      location.reload();
    });
  }

  public novoRisco(){
    this._router.navigate(['novoRisco', this.idApreciacao]);
  }

  public editarRisco(idRisco){
    this._router.navigate(['editarRisco', idRisco]);
  }

  public atualizarApreciacaoRisco(){
    if (this.formularioEditarApreciacao.valid) {
      this.apreciacaoService.atualizarApreciacaoRisco(this.editarApreciacao).subscribe(
        response => {
          this.editarApreciacao = response;
          this.editarApreciacao.dataApreciacao = new Date(response.dataApreciacao);
          console.log(response);
          alert("Apreciação editada com sucesso!");
        },
        error => {
          alert("Erro!")
        }
      )
    }else{
      Object.keys(this.formularioEditarApreciacao.controls).forEach(campo => {
        const controle = this.formularioEditarApreciacao.get(campo);
        controle.markAsDirty();
      });
    }
  }

  @Input() get colunasSelecionadas(): any[]{
    return this._colunasSelecionadas;
  }

  set colunasSelecionadas(val: any[]){
    this._colunasSelecionadas = this.colunas.filter(coluna => val.includes(coluna));
  }

}
