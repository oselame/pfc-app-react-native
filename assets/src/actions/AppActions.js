import { Actions } from 'react-native-router-flux';
import { types } from './types';
import { dispatcher } from './dispatches';
import axios from 'axios';

import { URL_API } from '../config/server';

export const carregaUltimaPartida = () => {
    return dispatch => {   
        const url = `${URL_API}/partidas/ultimaPartida`; 
        axios.get(url)
            .then( partidas => {
                dispatcher.carregarUltimaPartidaDispatcher(partidas, dispatch);
            })
            .catch( err => {
                dispatcher.erroCarregarUltimaPartidaDispatcher(dispatch);
            } );
    };
};

const carregaRankingAtualAxios = () => {
    const url = `${URL_API}/ranking/quadrimestreAtual`;   
    const request = axios.get(url, {});
    return dispatcher.carregaRankingAtualDispatcher(request);
};

const carregaRankingAnualAxios = () => {
    const url = `${URL_API}/ranking/quadrimestreAnual`;   
    const request = axios.get(url, {});
    return dispatcher.carregaRankingAnualDispatcher(request);
};

/**
 * Metodo que usa o redux-multi para exibir a evolucao e carregar o ranking atual
 */
export const carregaRankingAtual = () => {
    return [dispatcher.carregaEvolucaoRankingDispatcher(), carregaRankingAtualAxios()];
};

/**
 * Metodo que usa o redux-multi para exibir a evolucao e carregar o ranking anual
 */
export const carregaRankingAnual = () => {
    return [dispatcher.carregaEvolucaoRankingDispatcher(), carregaRankingAnualAxios()];
};


export const carregaAniversariantes = () => {
    console.log("carregaAniversariantes");
    return dispatch => {     
        const url = `${URL_API}/socios/aniversariantes`;   
        axios.get(url, {})
            .then( aniversariantes => {
                dispatcher.carregaAniversariantesDispatcher(aniversariantes, dispatch);
            })
            .catch( err => {
                console.log(err);
            } );
    };
};

export const carregaGalerias = () => {
    console.log("carregaGalerias");
    return dispatch => {     
        const url = `${URL_API}/galerias/fotos`;   
        axios.get(url, {})
            .then( galerias => {
                dispatcher.carregaGaleriasDispatcher(galerias, dispatch);
            })
            .catch( err => {
                console.log(err);
            } );
    };
};

export const carregaFotosGalerias = (cdGaleria) => {
    console.log("carregaFotosGalerias");
    return dispatch => {     
        const url = `${URL_API}/galerias/fotos/${cdGaleria}`;  
        axios.get(url, {})
            .then( fotos => {
                dispatcher.carregaFotosGaleriasDispatcher(cdGaleria, fotos, dispatch);

                Actions.fotosgaleria();
            })
            .catch( err => {
                console.log(err);
            } );
    }
};
