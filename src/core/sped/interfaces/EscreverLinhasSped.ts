import { RegistroSped } from "./RegistroSped";

export interface EscreverLinhasSped{
    escreverLinha(reg: RegistroSped, competencia: Date | null, removerQuebraLinha: boolean | null): string;
    escreverLinhas(regs: RegistroSped[], competencia: Date | null, removerQuebraLinha: boolean | null):string[];
}