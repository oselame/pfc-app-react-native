import axios from 'axios';

import { URL_API } from '../config/server';
import { types } from './types';

export const downloadHistoria = () => {
    console.log("downloadHistoria");
    const url = `${URL_API}/historia/download`;  
    return (dispatch) => {
        axios.get(url, {})
            .then( jantas => ({
                    type: 'XXXX',
                    payload: jantas
                }))
            .catch( (error) => console.log(error));

    }
};
