import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TipoEquipamento } from '..';

@Component({
  selector: 'app-novo-tipo-equipamento',
  templateUrl: './novo-tipo-equipamento.component.html',
  styleUrls: ['./novo-tipo-equipamento.component.css']
})
export class NovoTipoEquipamentoComponent implements OnInit {

  public formularioNovoTipoEquipamento: FormGroup;
  public tipoEquipamento = new TipoEquipamento();

  constructor(
    protected formBuilder: FormBuilder,
    public ref: DynamicDialogRef
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  protected criarFormulario() {
    this.formularioNovoTipoEquipamento = this.formBuilder.group({
      descricao: [this.tipoEquipamento.descricao, Validators.required]
    });
  }

  public Cancelar(){
    this.ref.close();
  }

  public CadastrarTipoEquipamento() {
    if (this.formularioNovoTipoEquipamento.valid) {

    }else{
      Object.keys(this.formularioNovoTipoEquipamento.controls).forEach(campo => {
        const controle = this.formularioNovoTipoEquipamento.get(campo);
        controle.markAsDirty();
      });
    }
  }

}
