import { types } from '../actions/types';

const INITIAL_STATE = {
    nuAno: 2000,
    cdQuadrimestre: 0,
    exibeEvolucao: false,
    ranking: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.EXIBE_EVOLUCAO_RANKING: 
            return {
                ...state,
                exibeEvolucao: true
            }
        case types.CARREGA_RANKING_QUADRIMESTRE_ATUAL:
            return {
                ...state,
                ranking: action.payload.socios,
                nuAno: action.nuAno,
                cdQuadrimestre: action.cdQuadrimestre,
                exibeEvolucao: false
            }
        default: 
            return state;
    }
}
