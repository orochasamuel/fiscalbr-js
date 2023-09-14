import { LeiauteArquivoSped, VersaoLeiauteSped } from "../enums";
import { EscreverSped } from "./EscreverSped";
import { LerSped } from "./LerSped";

export interface ArquivoSped extends EscreverSped, LerSped {
    arquivoSped: LeiauteArquivoSped;
    versaoLeiaute: VersaoLeiauteSped | null;

    calcularBloco9(totalizarBlocos: boolean | null): void;
}