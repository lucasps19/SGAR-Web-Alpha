import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApreciacaoService } from './shared';
import { ApreciacaoRouting } from './apreciacao-routing.module';
import { ListarApreciacoesComponent } from './listar-apreciacoes';
import { NovaApreciacaoComponent } from './nova-apreciacao';

import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button'
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    ListarApreciacoesComponent,
    NovaApreciacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    ApreciacaoRouting  
  ],
  providers: [
    ApreciacaoService
  ]
})
export class ApreciacoesModule { }
