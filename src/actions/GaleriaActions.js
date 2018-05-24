import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { URL_API } from '../config/server';
import { types } from './types';
import { dispatcher } from './dispatches';


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
