import { DescricaoPerformanceLevel, FrequenciaExposicaoPerigo, PossibilidadeEvitarPerigo, SeveridadeFerimento } from ".";

export class PerformanceLevelRequerido{
    public id: number;
    public idDescricaoPerformanceLevel: number;
    public descricaoPerformanceLevel: DescricaoPerformanceLevel;
    public idPossibilidadeEvitarPerigo: number;
    public possibilidadeEvitarPerigo: PossibilidadeEvitarPerigo;
    public idFrequenciaExposicaoPerigo: number;
    public frequenciaExposicaoPerigo: FrequenciaExposicaoPerigo;
    public idSeveridadeFerimento: number;
    public severidadeFerimento: SeveridadeFerimento;
}