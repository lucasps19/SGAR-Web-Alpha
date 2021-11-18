import { ApreciacaoRisco, CategoriaRisco, CicloVida, Dano, HRNAntes, HRNDepois, PerformanceLevelRequerido, RiscoABNT12100, Tarefa, TipoGrupoPerigo } from ".";

export class Risco{
    public id: number;
    public atividade: string;
    public onde: string;
    public medidaProtecaoSugerida: string;
    public idAPreciacaoRisco: number;
    public apreciacaoRisco: ApreciacaoRisco;
    public idCicloVida: number;
    public cicloVida: CicloVida;
    public idTarefa: number;
    public tarefa: Tarefa;
    public idTipoGrupoPerigo: number;
    public tipoGrupoPerigo: TipoGrupoPerigo;
    public idDano: number;
    public dano: Dano;
    public idRiscoABNT12100: number;
    public riscoABNT12100: RiscoABNT12100;
    public idHRNAntes: number;
    public hrnAntes: HRNAntes;
    public idHRNDepois: number;
    public hrnDepois: HRNDepois;
    public idCategoriaRisco: number;
    public categoriaRisco: CategoriaRisco;
    public idPerformanceLevelRequerido: number;
    public performanceLevelRequerido: PerformanceLevelRequerido;
}