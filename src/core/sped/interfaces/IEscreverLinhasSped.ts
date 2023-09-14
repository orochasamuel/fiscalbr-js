import { IRegistroSped } from "./IRegistroSped";

export interface IEscreverLinhasSped{
    escreverLinha(reg: IRegistroSped, competencia: Date | null, removerQuebraLinha: boolean | null): string;
    escreverLinhas(regs: IRegistroSped[], competencia: Date | null, removerQuebraLinha: boolean | null):string[];
}