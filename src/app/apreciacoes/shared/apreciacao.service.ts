import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento, ApreciacaoRisco, CicloVida, Tarefa, TipoGrupoPerigo, Dano, RiscoABNT12100, GrauPossivelLesao, PossibilidadeEvitarPerigo, FrequenciaExposicao, NumeroPessoas, HRNAntes } from '.';
import { Empresa, Pessoa } from 'src/app/login/shared';
import { TipoEquipamento } from './tipoEquipamento.model';
import { ReturnStatement } from '@angular/compiler';

const baseURL = 'https://localhost:44392'

@Injectable({
  providedIn: 'root'
})
export class ApreciacaoService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  public async buscarEquipamentosCadastrados(idEmpresaUsuarioLogado: string) : Promise<Equipamento[]> {
    return await this.httpClient.get<Equipamento[]>(`${baseURL}/BuscarEquipamentos?idEmpresaUsuarioLogado=${idEmpresaUsuarioLogado}`).toPromise();
  }

  public async buscarPessoasPorEmpresa(idEmpresaUsuarioLogado: string) : Promise<Pessoa[]> {
    return await this.httpClient.get<Pessoa[]>(`${baseURL}/BuscarPessoasPorEmpresa?idEmpresaUsuarioLogado=${idEmpresaUsuarioLogado}`).toPromise();
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

  cadastrarTipoEquipamento(data: TipoEquipamento) : Observable<any> {
    return this.httpClient.post<any>(`${baseURL}/CadastrarTipoEquipamento`, data);
  }

  incluirNovaApreciacaoRisco(data: ApreciacaoRisco) : Observable<ApreciacaoRisco> {
    return this.httpClient.post<ApreciacaoRisco>(`${baseURL}/IncluirNovaApreciacao`, data);
  }

  public async buscarApreciacao(idApreciacao: string): Promise<ApreciacaoRisco> {
    return await this.httpClient.get<ApreciacaoRisco>(`${baseURL}/BuscarApreciacaoRisco?idApreciacao=${idApreciacao}`).toPromise();
  }

  public async buscarApreciacoesUsuarioLogado(idUsuarioLogado: string) : Promise<ApreciacaoRisco[]>{
    return await this.httpClient.get<ApreciacaoRisco[]>(`${baseURL}/BuscarApreciacoes?idUsuarioLogado=${idUsuarioLogado}`).toPromise();
  }

  atualizarApreciacaoRisco(data: ApreciacaoRisco) : Observable<ApreciacaoRisco> {
    return this.httpClient.post<ApreciacaoRisco>(`${baseURL}/AtualizarApreciacaoRisco`, data);
  }

  calcularHrnAntes(data: HRNAntes) : Observable<HRNAntes> {
    return this.httpClient.post<HRNAntes>(`${baseURL}/CalcularHrnAntes`, data);
  }

  public async buscarCiclosVida() : Promise<CicloVida[]> {
    return await this.httpClient.get<CicloVida[]>(`${baseURL}/BuscarCicloVida`).toPromise();
  }

  public async buscarTarefas(idCicloVida: number) : Promise<Tarefa[]> {
    return await this.httpClient.get<Tarefa[]>(`${baseURL}/BuscarTarefas?idCiclVida=${idCicloVida}`).toPromise();
  }

  public async buscarTipoGrupoPerigo() : Promise<TipoGrupoPerigo[]> {
    return await this.httpClient.get<TipoGrupoPerigo[]>(`${baseURL}/BuscarTipoGrupoPerigo`).toPromise();
  }

  public async buscarDanos(idTipoGrupoPerigo: number) : Promise<Dano[]> {
    return await this.httpClient.get<Dano[]>(`${baseURL}/BuscarDano?idTipoGrupoPerigo=${idTipoGrupoPerigo}`).toPromise();
  }

  public async buscarRiscosABNT12100() : Promise<RiscoABNT12100[]> {
    return await this.httpClient.get<RiscoABNT12100[]>(`${baseURL}/BuscarRiscosABNT12100`).toPromise();
  } 

  public async buscarGLPHRN() : Promise<GrauPossivelLesao[]> {
    return await this.httpClient.get<GrauPossivelLesao[]>(`${baseURL}/BuscarGLP-HRN`).toPromise();
  }

  public async buscarPOHRN() : Promise<PossibilidadeEvitarPerigo[]> {
    return await this.httpClient.get<PossibilidadeEvitarPerigo[]>(`${baseURL}/BuscarPO-HRN`).toPromise();
  }

  public async buscarFEHRN() : Promise<FrequenciaExposicao[]> {
    return await this.httpClient.get<FrequenciaExposicao[]>(`${baseURL}/BuscarFE-HRN`).toPromise();
  }

  public async buscarNPHRN() : Promise<NumeroPessoas[]> {
    return await this.httpClient.get<NumeroPessoas[]>(`${baseURL}/BuscarNP-HRN`).toPromise();
  }
  
}
