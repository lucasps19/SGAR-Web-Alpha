import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModules } from './app-routing.modules';
import { LoginModule } from './login/Index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModules,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
