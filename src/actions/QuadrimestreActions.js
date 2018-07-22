import axios from 'axios';

import { URL_API } from '../config/server';
import { types } from './types';
import { dispatcher } from './dispatches';

/** 
 * Carrega o ano e o quadrimestre atual usados nas tela de Ranking e Artilheiros
*/
export const carregaQuadrimestreAtual = () => {
    console.log("carregaQuadrimestreAtual");
    return dispatch => {   
        const url = `${URL_API}/quadrimestre/atual`;   
        axios.get(url)
            .then( (quadrimestreAtual) => {
                dispatcher.carregaQuadrimestreAtualDispatcher(quadrimestreAtual, dispatch);
            })
            .catch( err => {
                console.log(err);
            } );
    };
};

export const carregaListaQuadrimestreAno = (nuAno) => {
    console.log("carregaListaQuadrimestreAno", nuAno);
    return dispatch => {     
        const url = `${URL_API}/quadrimestre/lista?nuAno=${nuAno}`;  
        axios.get(url, {})
            .then( quadrimestres => {
                dispatch({
                    type: types.CARREGA_LISTA_QUADRIMESTRE_ANO,
                    payload: quadrimestres.data
                });
            })
            .catch( err => {
                console.log(err);
            } );
    };
};

export const carregaListaQuadrimestresPorAno = () => {
    console.log("carregaListaQuadrimestresPorAno.action");
    return dispatch => {     
        const url = `${URL_API}/quadrimestre/anos`;  
        axios.get(url, {})
            .then( quadrimestres => {     
                // console.log("quadrimestres", quadrimestres.data);           
                dispatch({
                    type: types.CARREGA_LISTA_QUADRIMESTRES_POR_ANO,
                    payload: quadrimestres.data
                });
            })
            .catch( err => {
                console.log(err);
            } );
    };
};

export const atualizaDadosQuadrimestre = (nuAno, cdQuadrimestre, exibeSegundoQuadrimestre, exibeTerceiroQuadrimestre) => {
    console.log("atualizaDadosQuadrimestre", nuAno, cdQuadrimestre, exibeSegundoQuadrimestre, exibeTerceiroQuadrimestre);
    return {
        type: types.ATUALIZA_DADOS_QUADRIMESTRE,
        payload: { nuAno, cdQuadrimestre, exibeSegundoQuadrimestre, exibeTerceiroQuadrimestre }
    };
};


export const atualizaAnoQuadrimestre = (nuAno) => {
    console.log("atualizaAnoQuadrimestre", nuAno);
    return {
        type: types.ATUALIZA_ANO_QUADRIMESTRE,
        payload: { nuAno }
    };
};

export const atualizaAnoEQuadrimestre = (nuAno, cdQuadrimestre) => {
    console.log("atualizaAnoEQuadrimestre", nuAno, cdQuadrimestre);
    return {
        type: types.ATUALIZA_ANO_E_QUADRIMESTRE,
        payload: { nuAno, cdQuadrimestre }
    };
};


