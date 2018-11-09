import { types } from '../actions/types';

const INITIAL_STATE = {
    nuAno: 0,
    cdQuadrimestre: 1,
    exibeEvolucaoArtilheiros: false,
    artilheiros: []
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
