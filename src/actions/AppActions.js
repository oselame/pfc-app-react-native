import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { URL_API } from '../config/server';
import { types } from './types';
import { dispatcher } from './dispatches';


export const verificaBackend = () => {
    console.log("verificaBackend");
    return dispatch => {   
        const url = `${URL_API}/v2/api-docs`; 
        axios.get(url)
            .then( () => {
                dispatcher.verificaBackendNoArDispatcher(true, dispatch);
            })
            .catch( err => {
                dispatcher.verificaBackendNoArDispatcher(false, dispatch);
            } );
    };
};

/** 
 * Carrega o ano e o quadrimestre atual usados nas tela de Ranking e Artilheiros
*/
export const carregaQuadrimestreAtual = () => {
    console.log("carregaQuadrimestreAtual");
    return dispatch => {   
        const url = `${URL_API}/quadrimestre/atual`;   
        axios.get(url)
            .then( (quadrimestreAtual) => {
                dispatcher.carregaQuadrimestreAtualDispatcher(quadrimestreAtual, dispatch);
            })
            .catch( err => {
                console.log(err);
            } );
    };
};


export const carregaListaQuadrimestreAno = (nuAno) => {
    console.log("carregaListaQuadrimestreAno", nuAno);
    return dispatch => {     
        const url = `${URL_API}/quadrimestre/lista?nuAno=${nuAno}`;  
        axios.get(url, {})
            .then( quadrimestres => {
                dispatch({
                    type: types.CARREGA_LISTA_QUADRIMESTRE_ANO,
                    payload: quadrimestres.data
                })
            })
            .catch( err => {
                console.log(err);
            } );
    };
};
