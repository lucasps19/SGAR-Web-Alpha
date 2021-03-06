import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModules } from './app-routing.modules';
import { LoginModule } from './login/Index';
import { ApreciacoesModule } from './apreciacoes';
import { RouterModule } from '@angular/router';

import {AvatarModule} from 'primeng/avatar';
import {PanelMenuModule} from 'primeng/panelmenu';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AvatarModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    AppRoutingModules
  ],
  exports: [
    LoginModule,
    ApreciacoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
