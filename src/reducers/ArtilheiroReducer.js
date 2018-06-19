import { types } from '../actions/types';

const INITIAL_STATE = {
    nuAno: 0,
    cdQuadrimestre: 0,
    artilheiros: [],
    exibeEvolucaoArtilheiros: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.EXIBE_EVOLUCAO_ARTILHEIRO: 
            return {
                ...state,
                exibeEvolucaoArtilheiros: true
            }
        case types.CARREGA_ARTILHEIRO_QUADRIMESTRE_ATUAL:
            return {
                ...state,
                artilheiros: action.payload.socios,
                nuAno: action.nuAno,
                cdQuadrimestre: action.cdQuadrimestre,
                exibeEvolucaoArtilheiros: false
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
