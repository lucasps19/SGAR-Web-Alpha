import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipamento, NovaApreciacaoRisco, ApreciacaoService } from '..';

@Component({
  selector: 'app-nova-apreciacao',
  templateUrl: './nova-apreciacao.component.html',
  styleUrls: ['./nova-apreciacao.component.css']
})
export class NovaApreciacaoComponent implements OnInit {

  public formularioNovaApreciacao: FormGroup;
  public novaApreciacao = new NovaApreciacaoRisco();
  public listaEquipamentos: Equipamento[];

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarEquipamentosCadastrados();
  }

  protected criarFormulario() {
    this.formularioNovaApreciacao = this.formBuilder.group({
      id: [this.novaApreciacao.id],
      idEquipamento: [this.novaApreciacao.idEquipamento],
      dataApreciacao: [this.novaApreciacao.dataApr],
      limiteUso: [this.novaApreciacao.limiteUso],
      limiteEspaco: [this.novaApreciacao.limiteEspaco],
      limiteTempo: [this.novaApreciacao.limiteTempo]
    });
  }

  protected buscarEquipamentosCadastrados(){
    this.apreciacaoService.buscarEquipamentosCadastrados().then(dados => {
      this.listaEquipamentos = dados;
    })
  }

}
