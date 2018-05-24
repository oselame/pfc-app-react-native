import { types } from '../actions/types';

const INITIAL_STATE = {
    nuAno: 2000,
    cdQuadrimestre: 0,
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
                nuAno: action.nuAno,
                cdQuadrimestre: action.cdQuadrimestre,
                exibeEvolucaoRanking: false
            }
        default: 
            return state;
    }
}
