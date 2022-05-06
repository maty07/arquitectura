export class PokemonList {
    name: string;
    url?: string; // opcional

    constructor(name: string, url?: string) {
        this.name = name;
        this.url = url;
    }
}

