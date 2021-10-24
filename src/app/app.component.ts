import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
          label: 'Menu',
          icon: 'pi pi-pw pi-bars',
          items: [
            {label: 'Nova Apreciação', icon: 'pi pi-fw pi-plus', routerLink: 'novaApreciacoes'},
            {label: 'Lista de Apreciações', icon: 'pi pi-fw pi-list', routerLink: 'listarApreciacoes'},
            {label: 'Configurações', icon: 'pi pi-fw pi-cog'},
            {label: 'Sair', icon: 'pi pi-fw pi-sign-out', routerLink: 'login'}
          ]
      }
    ];
  }
}
