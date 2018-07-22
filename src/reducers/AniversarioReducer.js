import { types } from '../actions/types';

const INITIAL_STATE = {
    aniversariantes: [],
    exibeEvolucaoAniversariantes: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CARREGA_ANIVERSARIANTES:
            return {
                ...state, 
                aniversariantes: action.payload,
                exibeEvolucaoAniversariantes: false
            }        
        default: 
            return state;
    }
}
