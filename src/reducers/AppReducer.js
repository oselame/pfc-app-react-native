import { types } from '../actions/types';

const INITIAL_STATE = {
    backendNoAr: -1,
    nuAnoAtual: 2000,
    cdQuadrimestreAtual: 0,
    quadrimestres: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.BACKEND_NO_AR:
            return {
                ...state, 
                backendNoAr: action.payload == true ? 1 : 0
            }
        case types.CARREGA_QUADRIMESTRE_ATUAL:
            return {
                ...state,
                cdQuadrimestreAtual: action.payload.data.cdQuadrimestre,
                nuAnoAtual: action.payload.data.nuAno
            }
        case types.CARREGA_LISTA_QUADRIMESTRE_ANO:
            return {
                ...state,
                quadrimestres: action.payload
            }
        
        
        default: 
            return state;
    }
}
