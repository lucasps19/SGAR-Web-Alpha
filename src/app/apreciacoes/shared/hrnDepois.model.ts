import { FaixaHRN, FrequenciaExposicao, GrauPossivelLesao, NumeroPessoas, PossibilidadeOcorrencia } from ".";

export class HRNDepois{
    public id: number;
    public valorCalculado: number;
    public idFaixaHRN: number;
    public faixaHRN: FaixaHRN;
    public idPossibilidadeOcorrencia: number;
    public possibilidadeOcorrencia: PossibilidadeOcorrencia;
    public idFrequenciaExposicao: number;
    public frequenciaExposicao: FrequenciaExposicao;
    public idNumeroPessoas: number;
    public numeroPessoas: NumeroPessoas;
    public idGrauPossivelLesao: number;
    public grauPossivelLesao: GrauPossivelLesao;
}