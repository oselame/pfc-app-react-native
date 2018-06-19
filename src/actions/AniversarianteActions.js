import axios from 'axios';

import { URL_API } from '../config/server';
import { dispatcher } from './dispatches';

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
