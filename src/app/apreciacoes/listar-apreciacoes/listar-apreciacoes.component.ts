import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listar-apreciacoes',
  templateUrl: './listar-apreciacoes.component.html',
  styleUrls: ['./listar-apreciacoes.component.css']
})
export class ListarApreciacoesComponent implements OnInit {

  public formularioFiltro: FormGroup;

  constructor(
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  protected criarFormulario() {
    this.formularioFiltro = this.formBuilder.group({
      
    });
  }

}
