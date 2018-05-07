import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import BoasVindas from './components/boasVindas';
import Principal from './components/principal';
import FotoGaleria from './components/fotogaleria';

import { general } from './styles';

export default props => (
  <Router 
    navigationBarStyle={ general.statusBar } 
    titleStyle={{ color: '#fff'}} >
    
    <Stack key="root">
      <Scene key='boasvindas'   component={BoasVindas}   title="Bem Vindo" hideNavBar={true}  />
      <Scene key='principal'    component={Principal}    title="Principal" hideNavBar={true} initial />
      <Scene key='fotosgaleria' component={FotoGaleria}   title="Fotos" hideNavBar={false}  />
    </Stack>

  </Router>
)
