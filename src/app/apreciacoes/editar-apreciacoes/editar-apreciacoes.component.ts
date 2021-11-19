import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipamento, ApreciacaoRisco, ApreciacaoService, NovoEquipamentoComponent, Risco } from '..';
import { Pessoa } from 'src/app/login/shared';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-editar-apreciacoes',
  templateUrl: './editar-apreciacoes.component.html',
  styleUrls: ['./editar-apreciacoes.component.css'],
  providers: [DialogService]
})
export class EditarApreciacoesComponent implements OnInit {

  public formularioEditarApreciacao: FormGroup;
  public editarApreciacao = new ApreciacaoRisco();
  public listaEquipamentos: Equipamento[];
  public listaPessoasPorEmpresa: Pessoa[];
  public listaRiscos: Risco[];
  public colunas: any[];
  public _colunasSelecionadas: any[];

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarEquipamentosCadastrados();
    this.buscarPessoasPorEmpresa();

    this.colunas = [
      { field: 'id', header: 'Código'},
      { field: 'cicloVida.descricao', header: 'Ciclo de Vida '},
      { field: 'tarefa.descricao', header: 'Tarefa'},
      { field: 'atividade', header: 'Atividade'},
      { field: 'tipoGrupoPerigo.descricao', header: 'Tipo Grupo/Perigo'},
      { field: 'dano.descricao', header: 'Dano'},
      { field: 'onde', header: 'Onde'},
      { field: 'riscoABNT12100.descricao', header: 'Risco'},
      { field: 'hrnAntes.valorCalculado', header: 'HRN'},
      { field: 'hrnAntes.faixaHRN.descricao', header: 'Faixa HRN'},
      { field: 'categoriaRisco.descricaoCategoria.descricao', header: 'Categoria'},
      { field: 'performanceLevelRequerido.descricaoPerformanceLevel.descricao', header: 'PLr'},
      { field: 'medidaProtecaoSugerida', header: 'Medidas de Proteção Sugeridas'},
      { field: 'hrnDepois.valorCalculado', header: 'Estimativa HRN'}
    ]

    this._colunasSelecionadas = this.colunas;
  }

  protected criarFormulario() {
    this.formularioEditarApreciacao = this.formBuilder.group({
      id: [this.editarApreciacao.id],
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

  public NovoEquipamento() {
    const ref = this.dialogService.open(NovoEquipamentoComponent, {
        header: 'Adicionar um novo equipamento',
        width: '500px'
    });

    ref.onClose.subscribe(function(){
      location.reload();
    });
  }

  @Input() get colunasSelecionadas(): any[]{
    return this._colunasSelecionadas;
  }

  set colunasSelecionadas(val: any[]){
    this._colunasSelecionadas = this.colunas.filter(coluna => val.includes(coluna));
  }

}
