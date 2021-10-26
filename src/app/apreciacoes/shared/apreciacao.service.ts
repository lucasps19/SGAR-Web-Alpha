import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento } from '.';

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
  
}
