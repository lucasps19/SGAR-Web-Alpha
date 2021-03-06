import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApreciacaoService } from './shared';
import { ApreciacaoRouting¬†} from './apreciacao-routing.module';
import { ListarApreciacoesComponent } from './listar-apreciacoes';
import { NovaApreciacaoComponent } from './nova-apreciacao';
import { NovoEquipamentoComponent } from './novo-equipamento';
import { NovoTipoEquipamentoComponent } from './novo-tipo-equipamento';
import { EditarApreciacoesComponent } from './editar-apreciacoes';
import { NovoRiscosComponent } from './novo-riscos';
import { EditarRiscoComponent } from './editar-risco';

import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button'
import {TableModule} from 'primeng/table';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DividerModule} from 'primeng/divider';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  declarations: [
    ListarApreciacoesComponent,
    NovaApreciacaoComponent,
    NovoEquipamentoComponent,
    NovoTipoEquipamentoComponent,
    EditarApreciacoesComponent,
    NovoRiscosComponent,
    EditarRiscoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DropdownModule,
    MultiSelectModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    DynamicDialogModule,
    DividerModule,
    SelectButtonModule,
    ReactiveFormsModule,
    ApreciacaoRouting¬†¬†
  ],
  entryComponents: [
    NovoEquipamentoComponent,
    NovoTipoEquipamentoComponent
  ],
  providers: [
    ApreciacaoService
  ]
})
export class ApreciacoesModule { }
