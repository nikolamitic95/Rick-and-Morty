import { fetchData } from './fetch.js';

export const fetchAllCharacters = (id, onSuccess) => {
    fetchData(`https://rickandmortyapi.com/api/character?page=${id}`, onSuccess)
}

export const fetchSingleCharacter = (id, onSuccess) => {
    fetchData(`https://rickandmortyapi.com/api/character/${id}`, onSuccess)
}

