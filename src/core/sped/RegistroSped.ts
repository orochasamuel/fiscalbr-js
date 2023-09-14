import { IRegistroSped } from "./interfaces/IRegistroSped";

export abstract class RegistroSped implements IRegistroSped {
    public reg: string;

    constructor(reg: string) {
        this.reg = reg;
    }

    abstract validar(): boolean
}