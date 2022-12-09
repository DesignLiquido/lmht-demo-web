import { ConversorLmht } from "@designliquido/lmht-js";

export class LmhtWeb {
    conversorLmht: ConversorLmht;

    constructor() {
        this.conversorLmht = new ConversorLmht();
    }

    converter(texto: string) {
        return this.conversorLmht.converterPorTexto(texto);
    }
}