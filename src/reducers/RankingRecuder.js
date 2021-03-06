import { types } from '../actions/types';

const INITIAL_STATE = {
    nuAno: 0,
    cdQuadrimestre: 1,
    exibeEvolucaoRanking: false,
    ranking: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.EXIBE_EVOLUCAO_RANKING: 
            return {
                ...state,
                exibeEvolucaoRanking: true
            }
        case types.CARREGA_RANKING_QUADRIMESTRE_ATUAL:
            return {
                ...state,
                ranking: action.payload.socios,
                exibeEvolucaoRanking: false
            }
        case types.ATUALIZA_ANO_QUADRIMESTRE_RANKING:
            return {
                ...state,
                nuAno: action.payload.nuAno,
                cdQuadrimestre: action.payload.cdQuadrimestre
            }
        default: 
            return state;
    }
}
