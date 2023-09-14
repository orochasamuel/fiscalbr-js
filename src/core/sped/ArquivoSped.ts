import { LeiauteArquivoSped, VersaoLeiauteSped } from "./enums";
import { ArquivoSped as ArquivoSpedBase } from "./interfaces/ArquivoSped";
import { RegistroSped } from "./interfaces/RegistroSped";

export abstract class ArquivoSped implements ArquivoSpedBase{
    arquivoSped: LeiauteArquivoSped;
    versaoLeiaute: VersaoLeiauteSped | null;

    erros: string[];
    linhas: string[];

    public constructor(arquivoSped: LeiauteArquivoSped, versaoLeiaute: VersaoLeiauteSped | null){
        this.arquivoSped = arquivoSped;
        
        if (versaoLeiaute !== null)
            this.versaoLeiaute = versaoLeiaute;
    }

    abstract calcularBloco9(totalizarBlocos: boolean | null): void;

    escreverArquivo(caminho: string, enconding: string | null): void {
        throw new Error("Method not implemented.");
    }
    escreverLinha(reg: RegistroSped, competencia: Date | null, removerQuebraLinha: boolean | null): string {
        throw new Error("Method not implemented.");
    }
    escreverLinhas(regs: RegistroSped[], competencia: Date | null, removerQuebraLinha: boolean | null): string[] {
        throw new Error("Method not implemented.");
    }

}