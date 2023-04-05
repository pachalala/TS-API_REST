
export type platotipo = "seco" | "sopa";

export interface Platos 
{

    id: number,
    integrantes: number,
    nombre: string, 
    Ingredientes : Ingredientes[]

}

export interface Ingredientes{

    id: number,
    nombre: string,
    cantidad: number,
    chek: number
  

}
