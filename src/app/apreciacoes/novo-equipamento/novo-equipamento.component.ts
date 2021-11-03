import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Empresa } from 'src/app/login/shared';
import { ApreciacaoService, Equipamento, TipoEquipamento } from '..';
import { DialogService } from 'primeng/dynamicdialog';
import { NovoTipoEquipamentoComponent } from '../novo-tipo-equipamento';

@Component({
  selector: 'app-novo-equipamento',
  templateUrl: './novo-equipamento.component.html',
  styleUrls: ['./novo-equipamento.component.css'],
  providers: [DialogService]
})
export class NovoEquipamentoComponent implements OnInit {

  public formularioNovoEquipamento: FormGroup;
  public equipamento = new Equipamento();
  public listaTiposEquipamento: TipoEquipamento[];
  public listaEmpresas: Empresa[];
  
  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder,
    public ref: DynamicDialogRef,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarEmpresas();
    this.buscarTiposEquipamento();
  }

  protected criarFormulario() {
    this.formularioNovoEquipamento = this.formBuilder.group({
      nome: [this.equipamento.nome, Validators.required],
      tipoEquipamento: [this.equipamento.idTipoEquipamento, Validators.required],
      empresa: [this.equipamento.idEmpresa, Validators.required]
    });
  }

  protected buscarEmpresas(){
    this.apreciacaoService.buscarEmpresas().then(dados => {
      this.listaEmpresas = dados;
    })
  }

  protected buscarTiposEquipamento(){
    this.apreciacaoService.buscarTiposEquipamentos().then(dados => {
      this.listaTiposEquipamento = dados;
    })
  }

  public Cancelar(){
    this.ref.close();
  }

  public NovoTipoEquipamento() {
    const ref = this.dialogService.open(NovoTipoEquipamentoComponent, {
        header: 'Adicionar um novo tipo de equipamento',
        width: '500px'
    });

    ref.onClose.subscribe(function(){
      location.reload();
    });
  }

  public CadastrarEquipamento() {
    if (this.formularioNovoEquipamento.valid) {
      this.apreciacaoService.cadastrarEquipamento(this.equipamento).subscribe(
        response => {
          console.log(response);
          alert("Cadastro realizado com Sucesso");

          this.ref.close();
        },
        error => {
          console.log(error);
          alert("Erro!");
        }
      )
    }else{
      Object.keys(this.formularioNovoEquipamento.controls).forEach(campo => {
        const controle = this.formularioNovoEquipamento.get(campo);
        controle.markAsDirty();
      });
    }
  }

}
