import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PokemonCard{
    id: number;
    name: string;
    tipo: string;
    image: string;
    isfacorite: boolean;
}

export interface Trainer{
    id: number;
    fullName: string;
    document: {type: string; dni: string};
    dateRegister: string; 

}

interface PokemonContextType {
    entrenadores: Trainer[];
    entrenadorActivo: Trainer | null;
    mochilaActual: PokemonCard[];
    guardarPokemonEnMochila:(pokemon : PokemonCard) => void;
    registrarEntrenador:(usuario: Trainer) => void;
    seleccionarEntrenador:(usuario: Trainer) => void;
    selccionarFavoritos:(pokemonId: number) => void;
    eliminarPokemonDeMochila:(pokemonId: number) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined> (undefined)

export const pokemonProvider: React.FC<{ children: React.ReactNode}> =({childern}) => {
    const [entrenadores,setEntrenadores] = useState<Trainer[]>([]);
    const [entrenadorActivo,setentrenadorActivo] = useState<Trainer | null <(null)>;
    const [mochilaActual, setMochilaActual] = useState<PokemonCard[]>([]);
}