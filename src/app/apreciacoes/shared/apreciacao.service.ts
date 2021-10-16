import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoEquipamento } from './tipoEquipamento.model';
import { FaixaHRN } from '.';

const baseURL = 'https://localhost:44392'

@Injectable({
  providedIn: 'root'
})
export class ApreciacaoService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  public async buscarTiposEquipamentos() : Promise<TipoEquipamento[]> {
    return await this.httpClient.get<TipoEquipamento[]>(`${baseURL}/BuscarTiposEquipamentos`).toPromise();
  }

  public async buscarFaixasHRN() : Promise<FaixaHRN[]> {
    return await this.httpClient.get<FaixaHRN[]>(`${baseURL}/BuscarFaixasHRN`).toPromise();
  }
  
}