import axios from 'axios';

import { URL_API } from '../config/server';
import { types } from './types';

export const carregaJantares = () => {
    console.log("carregaJantares");
    return dispatch => {     
        const url = `${URL_API}/jantas/`;  
        axios.get(url, {})
            .then( jantas => {
                dispatch({
                    type: types.CARREGA_JANTARES,
                    payload: jantas.data
                });
            })
            .catch( () => {
                    dispatch({
                        type: types.CARREGA_JANTARES_ERRO
                    });
                } );
    };
};
