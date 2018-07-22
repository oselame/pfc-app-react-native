import axios from 'axios';

import { URL_API } from '../config/server';
import { types } from './types';
import { dispatcher } from './dispatches';

const carregaRankingQuadrimestreAxios = (nuAno, cdQuadrimestre) => {
    console.log("carregaRankingQuadrimestre", nuAno, cdQuadrimestre);
    return dispatch => {     
        const url = `${URL_API}/ranking/quadrimestre?nuAno=${nuAno}&cdQuadrimestre=${cdQuadrimestre}`;
        axios.get(url, {})
            .then( ranking => { 
                // console.log("ranking.data", ranking.data);               
                dispatch({
                    type: types.CARREGA_RANKING_QUADRIMESTRE_ATUAL,
                    payload: ranking.data
                })
            })
            .catch( err => {
                console.log(err);
            } );
    }
}

export const carregaRankingQuadrimestre = (nuAno, cdQuadrimestre) => {
    return [dispatcher.carregaEvolucaoRankingDispatcher(), carregaRankingQuadrimestreAxios(nuAno, cdQuadrimestre)];
};

export const setaAnoSelecionado = (nuAno) => {
    return {
        type: types.ATUALIZA_ANO_RANKING,
        payload: { nuAno }
    }
}

export const setaAnoQuadrimestreSelecionado = (nuAno, cdQuadrimestre) => {
    return {
        type: types.ATUALIZA_ANO_QUADRIMESTRE_RANKING,
        payload: { nuAno, cdQuadrimestre }
    }
}