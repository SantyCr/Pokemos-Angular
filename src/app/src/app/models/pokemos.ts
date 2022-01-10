export interface Pokemos {
    count: number;
    next: string;
    previus: string;
    results: pokemon[];

}

interface pokemon{
    name: string;
    url: string;
}

export interface Habilidades{
    types: Typo[]; 

}

interface Typo{
    slot: number;
    type: [];
}





