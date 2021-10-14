import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipoEquipamento, ApreciacaoService, FiltroListarApreciacoes } from '../shared';

@Component({
  selector: 'app-listar-apreciacoes',
  templateUrl: './listar-apreciacoes.component.html',
  styleUrls: ['./listar-apreciacoes.component.css']
})
export class ListarApreciacoesComponent implements OnInit {

  public filtroListarApreciacoes = new FiltroListarApreciacoes();
  public formularioFiltro: FormGroup;
  public listaTiposEquipamentos: TipoEquipamento[];

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buscarTiposEquipamentos();
    this.criarFormulario();
  }

  protected criarFormulario() {
    this.formularioFiltro = this.formBuilder.group({
      tipoEquipamento: [this.filtroListarApreciacoes.idTipoEquipamento]
    });
  }

  protected buscarTiposEquipamentos() {
    this.apreciacaoService.buscarTiposEquipamentos().then(dados => {
      this.listaTiposEquipamentos = dados;
    })
  }

}
