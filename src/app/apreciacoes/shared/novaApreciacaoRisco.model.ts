import { Pessoa } from "src/app/login/shared";

export class NovaApreciacaoRisco{
    public id: number;
    public dataApreciacao: Date;
    public limiteUso: string;
    public limiteEspaco: string;
    public limiteTempo: string;
    public idEquipamento: number;
    public pessoas: Pessoa[];
}