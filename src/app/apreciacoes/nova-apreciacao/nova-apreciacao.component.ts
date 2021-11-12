import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipamento, NovaApreciacaoRisco, ApreciacaoService, NovoEquipamentoComponent } from '..';
import { Pessoa } from 'src/app/login/shared';
import { DialogService } from 'primeng/dynamicdialog';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-nova-apreciacao',
  templateUrl: './nova-apreciacao.component.html',
  styleUrls: ['./nova-apreciacao.component.css'],
  providers: [DialogService]
})
export class NovaApreciacaoComponent implements OnInit {

  public formularioNovaApreciacao: FormGroup;
  public novaApreciacao = new NovaApreciacaoRisco();
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
    this.novaApreciacao.dataApreciacao = new Date();
  }

  protected criarFormulario() {
    this.formularioNovaApreciacao = this.formBuilder.group({
      id: [this.novaApreciacao.id],
      idEquipamento: [this.novaApreciacao.idEquipamento, Validators.required],
      dataApreciacao: [this.novaApreciacao.dataApreciacao, Validators.required],
      limiteUso: [this.novaApreciacao.limiteUso, Validators.required],
      limiteEspaco: [this.novaApreciacao.limiteEspaco, Validators.required],
      limiteTempo: [this.novaApreciacao.limiteTempo, Validators.required],
      participantes: [this.novaApreciacao.pessoas, Validators.required]
    });
  }

  protected buscarEquipamentosCadastrados(){
    this.apreciacaoService.buscarEquipamentosCadastrados().then(dados => {
      this.listaEquipamentos = dados;
    })
  }

  protected buscarPessoasPorEmpresa(){
    this.apreciacaoService.buscarPessoasPorEmpresa().then(dados => {
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

  public IncluirNovaApreciacaoRisco(){
    if (this.formularioNovaApreciacao.valid) {
      this.apreciacaoService.incluirNovaApreciacaoRisco(this.novaApreciacao).subscribe(
        response => {
          this.novaApreciacao = response;
          console.log(response);
        },
        error => {
          alert("Erro!")
        }
      )
    }else{
      Object.keys(this.formularioNovaApreciacao.controls).forEach(campo => {
        const controle = this.formularioNovaApreciacao.get(campo);
        controle.markAsDirty();
      });
    }
  }

}

