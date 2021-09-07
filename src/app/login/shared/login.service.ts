import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pessoa } from '.';

const baseURL = 'https://localhost:44392/swagger/index.html'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  efetuarLogin(data: { cpf: string; senha: string; }) : Observable<any> {
    return this.httpClient.get('${baseURL}/${data}');
  }
}