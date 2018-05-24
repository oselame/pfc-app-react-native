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


