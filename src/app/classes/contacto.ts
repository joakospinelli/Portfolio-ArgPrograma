export class Contacto {

    id?: number;
    nombre: string;
    descripcion: string;
    logo: string;

    constructor(nombre: string, descripcion: string, logo: string){
        this.id = undefined;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.logo = logo;
    }

}
