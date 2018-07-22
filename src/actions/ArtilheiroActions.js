import axios from 'axios';

import { URL_API } from '../config/server';
import { types } from './types';
import { dispatcher } from './dispatches';


export const carregaArtilheirosQuadrimestreAxios = (nuAno, cdQuadrimestre) => {
    console.log("carregaArtilheirosQuadrimestre", nuAno, cdQuadrimestre);
    return dispatch => {     
        const url = `${URL_API}/ranking/artilheiro?nuAno=${nuAno}&cdQuadrimestre=${cdQuadrimestre}`;  
        axios.get(url, {})
            .then( artilheiros => {
                dispatch({
                    type: types.CARREGA_ARTILHEIRO_QUADRIMESTRE_ATUAL,
                    payload: artilheiros.data,
                    nuAno: nuAno,
                    cdQuadrimestre: cdQuadrimestre
                })
            })
            .catch( err => {
                console.log(err);
            } );
    }
}

export const carregaArtilheirosQuadrimestre = (nuAno, cdQuadrimestre) => {
    return [dispatcher.carregaEvolucaoArtilheiroDispatcher(), carregaArtilheirosQuadrimestreAxios(nuAno, cdQuadrimestre)];
}

export const setaAnoQuadrimestreSelecionado  = (nuAno, cdQuadrimestre) => {
    return {
        type: types.ATUALIZA_ANO_QUADRIMESTRE_ARTILHEIRO,
        payload: { nuAno, cdQuadrimestre }
    }
}
