import axios from 'axios';

import { URL_API } from '../config/server';
import { dispatcher } from './dispatches';


export const verificaBackend = () => {
  console.log('verificaBackend');
  return (dispatch) => {
    const url = `${URL_API}/v2/api-docs`;
    axios.get(url)
      .then(() => {
        dispatcher.verificaBackendNoArDispatcher(true, dispatch);
      })
      .catch(() => {
          dispatcher.verificaBackendNoArDispatcher(false, dispatch);
        });
  };
};

