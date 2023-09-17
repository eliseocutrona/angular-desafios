export interface Estudiante {
    id?:string,
    email: string | null,
    edad: number,
    password: string | null,
    nombre?: string,
    direccion?: string,
    telefono?: string,
    foto?: string,
    isAdmin:boolean,
    estaActivo: boolean
}


