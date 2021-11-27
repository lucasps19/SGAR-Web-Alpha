import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApreciacaoService, Risco } from '..';

@Component({
  selector: 'app-riscos',
  templateUrl: './novo-riscos.component.html',
  styleUrls: ['./novo-riscos.component.css']
})
export class NovoRiscosComponent implements OnInit {

  public formularioNovoRisco: FormGroup;
  public novoRisco = new Risco();

  constructor(
    protected apreciacaoService: ApreciacaoService,
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  protected criarFormulario() {
    this.formularioNovoRisco = this.formBuilder.group({
      id: [this.novoRisco.id]
    });
  }

}
