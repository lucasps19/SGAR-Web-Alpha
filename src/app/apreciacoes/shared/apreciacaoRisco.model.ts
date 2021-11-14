import { Pessoa } from "src/app/login/shared";
import { Equipamento } from ".";

export class ApreciacaoRisco{
    public id: number;
    public dataApreciacao: Date;
    public limiteUso: string;
    public limiteEspaco: string;
    public limiteTempo: string;
    public equipamento: Equipamento;
    public pessoas: Pessoa[];
}