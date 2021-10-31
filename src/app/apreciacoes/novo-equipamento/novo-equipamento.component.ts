import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/login/shared';
import { ApreciacaoService, Equipamento, TipoEquipamento } from '..';

@Component({
  selector: 'app-novo-equipamento',
  templateUrl: './novo-equipamento.component.html',
  styleUrls: ['./novo-equipamento.component.css']
})
export class NovoEquipamentoComponent implements OnInit {

  public formularioNovoEquipamento: FormGroup;
  public equipamento: Equipamento;
  public listaTiposEquipamento: TipoEquipamento[];
  public listaEmpresas: Empresa[];
  
  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder
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

}
