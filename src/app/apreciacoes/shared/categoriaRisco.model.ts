import { DescricaoCategoria, FrequenciaExposicaoPerigo, PossibilidadeEvitarPerigo, SeveridadeFerimento } from ".";

export class CategoriaRisco{
    public id: number;
    public idDescricaoCategoria: number;
    public descricaoCategoria: DescricaoCategoria;
    public idPossibilidadeEvitarPerigo: number;
    public possibilidadeEvitarPerigo: PossibilidadeEvitarPerigo;
    public idFrequenciaExposicaoPerigo: number;
    public frequenciaExposicaoPerigo: FrequenciaExposicaoPerigo;
    public idSeveridadeFerimento: number;
    public severidadeFerimento: SeveridadeFerimento;
}