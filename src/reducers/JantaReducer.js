import { types } from '../actions/types';

const INITIAL_STATE = {
    jantares: [],
    erroCarregarJantares: false,
    exibeEvolucaoJantar: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CARREGA_JANTARES:
            return {
                ...state,
                jantares: action.payload,
                erroCarregarJantares: false,
                exibeEvolucaoJantar: false
            }
        case types.CARREGA_JANTARES_ERRO: 
            return {
                ...state,
                erroCarregarJantares: true,
                exibeEvolucaoJantar: false,
                jantares: []
            }        
        default: 
            return state;
    }
}
