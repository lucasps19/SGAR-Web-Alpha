import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento } from '.';
import { Empresa, Pessoa } from 'src/app/login/shared';
import { TipoEquipamento } from './tipoEquipamento.model';

const baseURL = 'https://localhost:44392'

@Injectable({
  providedIn: 'root'
})
export class ApreciacaoService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  public async buscarEquipamentosCadastrados() : Promise<Equipamento[]> {
    return await this.httpClient.get<Equipamento[]>(`${baseURL}/BuscarEquipamentos`).toPromise();
  }

  public async buscarPessoasPorEmpresa() : Promise<Pessoa[]> {
    return await this.httpClient.get<Pessoa[]>(`${baseURL}/BuscarPessoasPorEmpresa`).toPromise();
  }

  public async buscarEmpresas() : Promise<Empresa[]> {
    return await this.httpClient.get<Empresa[]>(`${baseURL}/BuscarEmpresas`).toPromise();
  }

  public async buscarTiposEquipamentos() : Promise<TipoEquipamento[]> {
    return await this.httpClient.get<TipoEquipamento[]>(`${baseURL}/BuscarTiposEquipamentos`).toPromise();
  }

  cadastrarEquipamento(data: Equipamento) : Observable<any> {
    return this.httpClient.post<any>(`${baseURL}/CadastrarEquipamento`, data);
  }
  
}
