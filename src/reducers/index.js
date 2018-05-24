import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import RankingReducer from './RankingRecuder';
import ArtilheiroReducer from './ArtilheiroReducer';
import JantaReducer from './JantaReducer';
import GaleriaReducer from './GaleriaReducer';
import AniversarioReducer from './AniversarioReducer';
import UltimaPartidaReducer from './UltimaPartidaReducer';

export default combineReducers({
    AppReducer: AppReducer,
    RankingReducer: RankingReducer,
    ArtilheiroReducer: ArtilheiroReducer,
    JantaReducer: JantaReducer,
    GaleriaReducer: GaleriaReducer,
    AniversarioReducer: AniversarioReducer,
    UltimaPartidaReducer: UltimaPartidaReducer
});
