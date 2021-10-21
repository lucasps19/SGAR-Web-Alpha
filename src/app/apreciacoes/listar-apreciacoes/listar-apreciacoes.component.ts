import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaixaHRN, TipoEquipamento, ApreciacaoService, FiltroListarApreciacoes, ApreciacaoRisco } from '../shared';

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
  public listaApreciacoes: ApreciacaoRisco[];

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buscarTiposEquipamentos();
    this.buscarFaixasHRN();
    this.criarFormulario();

    this.listaApreciacoes = [
      {id: 1001, equipamento: 'Prensa Hidráulica', dataApr: '15/01/2021', maiorHRN: 360 },
      {id: 1002, equipamento: 'Desempenadeira MSA', dataApr: '19/03/2021', maiorHRN: 350 },
      {id: 1003, equipamento: 'Correia Transportadora de Minerio', dataApr: '21/04/2021', maiorHRN: 300 },
      {id: 1004, equipamento: 'Injetora', dataApr: '18/06/2021', maiorHRN: 180 },
      {id: 1005, equipamento: 'Torno Mecânico', dataApr: '22/05/2021', maiorHRN: 370 },
      {id: 1006, equipamento: 'Robô Colaborativo Esmeril', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1007, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1008, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1009, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1010, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1011, equipamento: 'Prensa Hidráulica', dataApr: '15/01/2021', maiorHRN: 360 },
      {id: 1012, equipamento: 'Desempenadeira MSA', dataApr: '19/03/2021', maiorHRN: 350 },
      {id: 1013, equipamento: 'Correia Transportadora de Minerio', dataApr: '21/04/2021', maiorHRN: 300 },
      {id: 1014, equipamento: 'Injetora', dataApr: '18/06/2021', maiorHRN: 180 },
      {id: 1015, equipamento: 'Torno Mecânico', dataApr: '22/05/2021', maiorHRN: 370 },
      {id: 1016, equipamento: 'Robô Colaborativo Esmeril', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1017, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1018, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1019, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1020, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1021, equipamento: 'Prensa Hidráulica', dataApr: '15/01/2021', maiorHRN: 360 },
      {id: 1022, equipamento: 'Desempenadeira MSA', dataApr: '19/03/2021', maiorHRN: 350 },
      {id: 1023, equipamento: 'Correia Transportadora de Minerio', dataApr: '21/04/2021', maiorHRN: 300 },
      {id: 1024, equipamento: 'Injetora', dataApr: '18/06/2021', maiorHRN: 180 },
      {id: 1025, equipamento: 'Torno Mecânico', dataApr: '22/05/2021', maiorHRN: 370 },
      {id: 1026, equipamento: 'Robô Colaborativo Esmeril', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1027, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1028, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1029, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1030, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1031, equipamento: 'Prensa Hidráulica', dataApr: '15/01/2021', maiorHRN: 360 },
      {id: 1032, equipamento: 'Desempenadeira MSA', dataApr: '19/03/2021', maiorHRN: 350 },
      {id: 1033, equipamento: 'Correia Transportadora de Minerio', dataApr: '21/04/2021', maiorHRN: 300 },
      {id: 1034, equipamento: 'Injetora', dataApr: '18/06/2021', maiorHRN: 180 },
      {id: 1035, equipamento: 'Torno Mecânico', dataApr: '22/05/2021', maiorHRN: 370 },
      {id: 1036, equipamento: 'Robô Colaborativo Esmeril', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1037, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1038, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1039, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1040, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1041, equipamento: 'Prensa Hidráulica', dataApr: '15/01/2021', maiorHRN: 360 },
      {id: 1042, equipamento: 'Desempenadeira MSA', dataApr: '19/03/2021', maiorHRN: 350 },
      {id: 1043, equipamento: 'Correia Transportadora de Minerio', dataApr: '21/04/2021', maiorHRN: 300 },
      {id: 1044, equipamento: 'Injetora', dataApr: '18/06/2021', maiorHRN: 180 },
      {id: 1045, equipamento: 'Torno Mecânico', dataApr: '22/05/2021', maiorHRN: 370 },
      {id: 1046, equipamento: 'Robô Colaborativo Esmeril', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1047, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1048, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1049, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1050, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1051, equipamento: 'Prensa Hidráulica', dataApr: '15/01/2021', maiorHRN: 360 },
      {id: 1052, equipamento: 'Desempenadeira MSA', dataApr: '19/03/2021', maiorHRN: 350 },
      {id: 1053, equipamento: 'Correia Transportadora de Minerio', dataApr: '21/04/2021', maiorHRN: 300 },
      {id: 1054, equipamento: 'Injetora', dataApr: '18/06/2021', maiorHRN: 180 },
      {id: 1055, equipamento: 'Torno Mecânico', dataApr: '22/05/2021', maiorHRN: 370 },
      {id: 1056, equipamento: 'Robô Colaborativo Esmeril', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1057, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1058, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1059, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 },
      {id: 1060, equipamento: 'Teste', dataApr: '10/07/2021', maiorHRN: 80 }
    ]
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

  public limparCamposFormulario(){
    this.formularioFiltro.reset();
  }

}
