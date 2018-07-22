import { types } from '../actions/types';

const INITIAL_STATE = {
    nuAno: 0,
    cdQuadrimestre: 0,
    exibeSegundoQuadrimestre: false,
    exibeTerceiroQuadrimestre: false,
    quadrimestresAnos: []
};

export default (state = INITIAL_STATE, action) => {
    // console.log("payload", action.payload);
    switch (action.type) {
        case types.CARREGA_LISTA_QUADRIMESTRES_POR_ANO:
            return {
                ...state,
                quadrimestresAnos: action.payload
            }
            
        case types.ATUALIZA_DADOS_QUADRIMESTRE:
            return {
                ...state,
                nuAno: action.payload.nuAno,
                cdQuadrimestre: action.payload.cdQuadrimestre,
                exibeSegundoQuadrimestre: action.payload.exibeSegundoQuadrimestre,
                exibeTerceiroQuadrimestre: action.payload.exibeTerceiroQuadrimestre
            }
            
        case types.ATUALIZA_ANO_QUADRIMESTRE:
            return {
                ...state,
                nuAno: action.payload.nuAno
            }
        case types.ATUALIZA_ANO_E_QUADRIMESTRE:
            return {
                ...state,
                nuAno: action.payload.nuAno,
                cdQuadrimestre: action.payload.cdQuadrimestre
            }
            
        default: 
            return state;
    }
}
