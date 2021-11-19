import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApreciacaoRisco, ApreciacaoService } from '../shared';

@Component({
  selector: 'app-listar-apreciacoes',
  templateUrl: './listar-apreciacoes.component.html',
  styleUrls: ['./listar-apreciacoes.component.css']
})
export class ListarApreciacoesComponent implements OnInit {
  
  public listaApreciacoes: ApreciacaoRisco[];

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected _router: Router
  ) { }

  ngOnInit(): void {
    this.buscarApreciacoesUsuarioLogado();
  }
  
  buscarApreciacoesUsuarioLogado(){
    this.apreciacaoService.buscarApreciacoesUsuarioLogado(localStorage.getItem("idEmpresaUsuarioLogado")).then(dados =>{
      this.listaApreciacoes = dados;
    })
  }

  public editarApreciacao(idApreciacao: Number){
    this._router.navigate(['editarApreciacao', idApreciacao]);
  }

}
