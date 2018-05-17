import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { URL_API } from '../config/server';
import { types } from './types';
import { dispatcher } from './dispatches';


export const verificaBackend = () => {
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
}

export const carregaUltimaPartida = () => {
    return dispatch => {   
        const url = `${URL_API}/partidas/ultimaPartida`; 
        axios.get(url)
            .then( partidas => {
                dispatcher.carregarUltimaPartidaDispatcher(partidas, dispatch);
            })
            .catch( err => {
                dispatcher.erroCarregarUltimaPartidaDispatcher(dispatch);
            } );
    };
};

const carregaRankingAtualAxios = () => {
    const url = `${URL_API}/ranking/quadrimestreAtual`;   
    const request = axios.get(url, {});
    return dispatcher.carregaRankingAtualDispatcher(request);
};

const carregaRankingAnualAxios = () => {
    const url = `${URL_API}/ranking/quadrimestreAnual`;   
    const request = axios.get(url, {});
    return dispatcher.carregaRankingAnualDispatcher(request);
};

/**
 * Metodo que usa o redux-multi para exibir a evolucao e carregar o ranking atual
 */
export const carregaRankingAtual = () => {
    return [dispatcher.carregaEvolucaoRankingDispatcher(), carregaRankingAtualAxios()];
};

/**
 * Metodo que usa o redux-multi para exibir a evolucao e carregar o ranking anual
 */
export const carregaRankingAnual = () => {
    return [dispatcher.carregaEvolucaoRankingDispatcher(), carregaRankingAnualAxios()];
};


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

export const carregaJantares = () => {
    console.log("carregaJantares");
    return dispatch => {     
        const url = `${URL_API}/jantas/`;  
        axios.get(url, {})
            .then( jantas => {
                dispatch({
                    type: types.CARREGA_JANTARES,
                    payload: jantas.data
                })
            })
            .catch( err => {
                dispatch({
                    type: types.CARREGA_JANTARES_ERRO
                })
            } );
    }
};

const carregaArtilheirosQuadrimestreAtualAxios = (quadrimestre) => {
    console.log(quadrimestre);
    const url = `${URL_API}/ranking/quadrimestre?nuAno=${quadrimestre.nuAno}&cdQuadrimestre=${quadrimestre.cdQuadrimestre}`;   
    console.log(url);
    return request = axios.get(url, {});
};

const carregaQuadrimestreAtualAxios = () => {
    const url = `${URL_API}/quadrimestre/atual`;   
    const request = axios.get(url, {});
    return dispatcher.carregaQuadrimestreAtualDispatcher(request);
}

export const carregaQuadrimestreAtual = () => {
    return [dispatcher.carregaEvolucaoArtilheirosDispatcher(), carregaQuadrimestreAtualAxios()];
}

export const carregaListaQuadrimestreAno = (nuAno) => {
    console.log("carregaListaQuadrimestreAno", nuAno);
    return dispatch => {     
        const url = `${URL_API}/quadrimestre/lista?nuAno=${nuAno}`;  
        axios.get(url, {})
            .then( quadrimestres => {
                dispatch({
                    type: types.CARREGA_LISTA_QUADRIMESTRE_ANO,
                    payload: quadrimestres.data
                })
            })
            .catch( err => {
                console.log(err);
            } );
    }
}

export const carregaArtilheirosQuadrimestre = (nuAno, cdQuadrimestre) => {
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

