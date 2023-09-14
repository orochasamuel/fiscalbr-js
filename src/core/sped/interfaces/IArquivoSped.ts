import { LeiauteArquivoSped, VersaoLeiauteSped } from "../enums";
import { IEscreverSped } from "./IEscreverSped";
import { ILerSped } from "./ILerSped";

export interface IArquivoSped extends IEscreverSped, ILerSped {
    arquivoSped: LeiauteArquivoSped;
    versaoLeiaute: VersaoLeiauteSped;

    calcularBloco9(totalizarBlocos: boolean | null): void;
}