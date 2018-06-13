import { types } from '../actions/types';

const INITIAL_STATE = {
    artilheiros: [],
    nuAno: 2017,
    cdQuadrimestre: 3,
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
        case types.ATUALIZA_ANO_QUADRIMESTRE_ARTILHEIRO:
            return {
                ...state,
                nuAno: action.payload.nuAno,
                cdQuadrimestre: action.payload.cdQuadrimestre
            }
        default: 
            return state;
    }
}
