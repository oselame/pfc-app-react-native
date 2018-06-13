import { types } from './types';

export const dispatcher = {

    verificaBackendNoArDispatcher: (isBackendNoAr, dispatch) => {
            dispatch({
                type: types.BACKEND_NO_AR,
                payload: isBackendNoAr
            });
        },
    carregarUltimaPartidaDispatcher: (partidas, dispatch) => {
            dispatch({
                type: types.CARREGA_ULTIMA_PARTIDA,
                payload: partidas.data
            });
        },
    erroCarregarUltimaPartidaDispatcher: (dispatch) => {
            dispatch({
                type: types.CARREGA_ULTIMA_PARTIDA_ERRO
            });
        },
    carregaRankingAtualDispatcher: (request) => {
            console.log("carregaRankingAtualDispatcher");
            return  {
                        type: types.CARREGA_RANKING_ATUAL,
                        payload: request
                    };
        },
    carregaRankingAnualDispatcher: (request) => {
            console.log("carregaRankingAnualDispatcher");
            return  {
                        type: types.CARREGA_RANKING_ANUAL,
                        payload: request
                    };
        },
    carregaEvolucaoRankingDispatcher: () => {
            console.log("carregaEvolucaoRankingDispatcher");
            return  {
                     type: types.EXIBE_EVOLUCAO_RANKING
            };
        },
    carregaEvolucaoArtilheiroDispatcher: () => {
            console.log("carregaEvolucaoArtilheiroDispatcher");
            return  {
                    type: types.EXIBE_EVOLUCAO_ARTILHEIRO
            };
        },
    carregaAniversariantesDispatcher: (aniversariantes, dispatch) => {
            dispatch({
                type: types.CARREGA_ANIVERSARIANTES,
                payload: aniversariantes.data
            });    
        },
    carregaGaleriasDispatcher: (galerias, dispatch) => {
        dispatch({
            type: types.CARREGA_GALERIAS,
            payload: galerias.data
        });
    },
    carregaFotosGaleriasDispatcher: (cdGaleria, fotos, dispatch) => {
        dispatch({
            type: types.CARREGA_FOTOS_GALERIA,
            payload: fotos.data,
            cdGaleria: cdGaleria
        });
    },
    
    carregaQuadrimestreAtualDispatcher: (quadrimestreAtual, dispatch) => {
        //console.log("carregaQuadrimestreAtualDispatcher", quadrimestreAtual.data);
        dispatch({
            type: types.CARREGA_QUADRIMESTRE_ATUAL,
            payload: quadrimestreAtual
        });
    }
    
        
};
