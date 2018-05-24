import { types } from '../actions/types';

const INITIAL_STATE = {
    artilheiros: [],
    nuAno: 2000,
    cdQuadrimestre: 0,
    exibeEvolucao: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CARREGA_ARTILHEIRO_QUADRIMESTRE_ATUAL:
            return {
                ...state,
                artilheiros: action.payload.socios,
                nuAno: action.nuAno,
                cdQuadrimestre: action.cdQuadrimestre,
                exibeEvolucao: false
            }
        case types.EXIBE_EVOLUCAO_ARTILHEIRO: 
            return {
                ...state,
                exibeEvolucao: true
            }
        default: 
            return state;
    }
}
