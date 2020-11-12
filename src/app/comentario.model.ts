export class Comentario{
    id: number;
    comentario:string;
    like: boolean;

    constructor(id: number, comentario: string, like: boolean){
        this.id = id;
        this.comentario = comentario;
        this.like = like;
    }
}