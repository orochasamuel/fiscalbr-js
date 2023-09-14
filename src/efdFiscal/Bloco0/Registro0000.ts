import * as Enums from "../../core/sped/enums";
import { RegistroSped } from "../../core/sped/RegistroSped";

export class Registro0000 extends RegistroSped {

    // const REG_0000: string = "0000";
    // public constructor() {
    //     super("0000");
    // }

    public constructor(params: Partial<Registro0000>) {
        super("0000");
        Object.assign(this, params);
    }

    public codVer: Enums.CodVersaoSpedFiscal;
    public codFin: Enums.IndCodFinalidadeArquivo;
    public dtIni: Date;
    public dtFin: Date;
    public nome: string;
    public cnpj: string;
    public cpf: string;
    public uf: string;
    public ie: string;
    public codMun: string;
    public im: string;
    public suframa: string;
    public indPerfil: Enums.IndPerfilArquivo;
    public indAtiv: Enums.IndTipoAtividade;

    validar(): boolean {
        if (this.reg !== "0000")
            return false;

        return true;
    }
}
