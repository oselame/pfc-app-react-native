import { Actions } from 'react-native-router-flux';
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
                dispatch({
                    type: types.CARREGA_RANKING_QUADRIMESTRE_ATUAL,
                    payload: ranking.data,
                    nuAno: nuAno,
                    cdQuadrimestre: cdQuadrimestre
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