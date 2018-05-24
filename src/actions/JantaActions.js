import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { URL_API } from '../config/server';
import { types } from './types';
import { dispatcher } from './dispatches';

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
            .catch( err => {
                dispatch({
                    type: types.CARREGA_JANTARES_ERRO
                });
            } );
    };
};
