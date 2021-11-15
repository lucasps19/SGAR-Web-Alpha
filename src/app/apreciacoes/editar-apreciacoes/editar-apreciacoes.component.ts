import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipamento, ApreciacaoRisco, ApreciacaoService, NovoEquipamentoComponent } from '..';
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

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarEquipamentosCadastrados();
    this.buscarPessoasPorEmpresa();
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

}
