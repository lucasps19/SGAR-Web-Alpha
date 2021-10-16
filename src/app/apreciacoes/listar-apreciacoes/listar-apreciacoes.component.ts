import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaixaHRN, TipoEquipamento, ApreciacaoService, FiltroListarApreciacoes } from '../shared';

@Component({
  selector: 'app-listar-apreciacoes',
  templateUrl: './listar-apreciacoes.component.html',
  styleUrls: ['./listar-apreciacoes.component.css']
})
export class ListarApreciacoesComponent implements OnInit {

  public filtroListarApreciacoes = new FiltroListarApreciacoes();
  public formularioFiltro: FormGroup;
  public listaTiposEquipamentos: TipoEquipamento[];
  public listaFaixaHRN: FaixaHRN[];

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buscarTiposEquipamentos();
    this.buscarFaixasHRN();
    this.criarFormulario();
  }

  protected criarFormulario() {
    this.formularioFiltro = this.formBuilder.group({
      tipoEquipamento: [this.filtroListarApreciacoes.idTipoEquipamento],
      faixaHRN: [this.filtroListarApreciacoes.faixaHRN],
      dataInicio: [this.filtroListarApreciacoes.dataInicio],
      dataFim: [this.filtroListarApreciacoes.dataFim]
    });
  }

  protected buscarTiposEquipamentos() {
    this.apreciacaoService.buscarTiposEquipamentos().then(dados => {
      this.listaTiposEquipamentos = dados;
    })
  }

  protected buscarFaixasHRN(){
    this.apreciacaoService.buscarFaixasHRN().then(dados => {
      this.listaFaixaHRN = dados;
    })
  }

}
