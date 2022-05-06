export class Pokemon {
    id: number;
    name: string;
    type: string;
    image?: string; // opcional

    constructor(id: number, name: string, type: string, image?: string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type
    }
}
