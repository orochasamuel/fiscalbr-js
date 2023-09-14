import { RegistroSped as RegistroSpedBase } from "./interfaces/RegistroSped";

export abstract class RegistroSped implements RegistroSpedBase {
    public reg: string;

    constructor(reg: string) {
        this.reg = reg;
    }

    abstract validar(): boolean
}