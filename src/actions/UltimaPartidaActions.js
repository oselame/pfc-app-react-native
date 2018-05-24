import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { URL_API } from '../config/server';
import { types } from './types';
import { dispatcher } from './dispatches';

/**
 * Carrega os dados da ultima partida realizada
 */
export const carregaUltimaPartida = () => {
    console.log("carregaUltimaPartida");
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

