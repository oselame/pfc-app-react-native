import { types } from '../actions/types';

const INITIAL_STATE = {
    backendNoAr: true,
    dtUltimapartida: '',
    deResultado: '',
    deBolamurcha: '',
    deBolacheia: '',
    sociostimea: [],
    sociostimeb: [],
    nuAno: 2000,
    cdQuadrimestre: 0,
    ranking: [],
    quadrimestreAnual: false,
    exibeEvolucao: false,
    aniversariantes: [],
    galerias: [],
    cdGaleria: 0,
    fotosgaleria: [],
    erroCarregarUltimaPartida: false,
    erroCarregarJantares: false,
    jantares: [],
    exibeEvolucaoArtilheiros: false,
    quadrimestres: [],
    artilheiros: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.BACKEND_NO_AR:
            return {
                ...state, 
                backendNoAr: action.payload
            }
        case types.CARREGA_ULTIMA_PARTIDA: 
            return { ...state, 
                dtUltimapartida: action.payload.dtPartida,
                deResultado: action.payload.deResultado,
                deBolacheia: action.payload.deBolacheia,
                deBolamurcha: action.payload.deBolamurcha,
                sociostimea: action.payload.sociostimea,
                sociostimeb: action.payload.sociostimeb
              }
        case types.CARREGA_ULTIMA_PARTIDA_ERRO:
              return {
                ...state, 
                erroCarregarUltimaPartida: true
              }
        case types.CARREGA_RANKING_ATUAL: 
              return {
                  ...state, 
                  ranking: action.payload.data.socios, 
                  cdQuadrimestre: action.payload.data.cdQuadrimestre,
                  quadrimestreAnual: false, 
                  exibeEvolucao: false
              }
        case types.CARREGA_RANKING_ANUAL: 
            return {
                ...state, 
                ranking: action.payload.data.socios, 
                quadrimestreAnual: true, 
                exibeEvolucao: false
              }
        case types.MOSTRA_EVOLUCAO: 
              return {
                  ...state, exibeEvolucao: true
              }
        case types.CARREGA_ANIVERSARIANTES:
              return {
                  ...state, aniversariantes: action.payload
              }
        case types.CARREGA_GALERIAS: 
            return {
                ...state, galerias: action.payload
            }
        case types.SELECIONAR_GALERIA: 
            return {
                ...state, cdGaleria: action.payload
            }
        case types.CARREGA_FOTOS_GALERIA:
            return {
                ...state, 
                cdGaleria: action.cdGaleria,
                fotosgaleria: action.payload
            }
        case types.EXIBE_EVOLUCAO_RANKING: 
            return {
                ...state,
                exibeEvolucao: true
            }
        case types.CARREGA_JANTARES:
            return {
                ...state,
                jantares: action.payload,
                erroCarregarJantares: false
            }
        case types.CARREGA_JANTARES_ERRO: 
            return {
                ...state,
                erroCarregarJantares: true,
                jantares: []
            }
        case types.CARREGA_QUADRIMESTRE_ATUAL:
            return {
                ...state,
                cdQuadrimestre: action.payload.data.cdQuadrimestre,
                nuAno: action.payload.data.nuAno
            }
        case types.CARREGA_LISTA_QUADRIMESTRE_ANO:
            return {
                ...state,
                quadrimestres: action.payload
            }
        case types.EXIBE_EVOLUCAO_ARTILHEIROS:
            return {
                ...state,
                exibeEvolucaoArtilheiros: true
            }
        case types.CARREGA_ARTILHEIRO_QUADRIMESTRE_ATUAL:
            return {
                ...state,
                artilheiros: action.payload.socios,
                nuAno: action.nuAno,
                cdQuadrimestre: action.cdQuadrimestre
            }
        default: 
            return state;
    }
}
