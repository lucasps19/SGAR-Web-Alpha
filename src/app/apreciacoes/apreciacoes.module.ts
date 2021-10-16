import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApreciacaoService } from './shared';
import { ApreciacaoRouting } from './apreciacao-routing.module';
import { ListarApreciacoesComponent } from './listar-apreciacoes';

import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    ListarApreciacoesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    ApreciacaoRouting  
  ],
  providers: [
    ApreciacaoService
  ]
})
export class ApreciacoesModule { }