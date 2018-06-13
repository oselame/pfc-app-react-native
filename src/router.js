import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import BoasVindas from './components/boasVindas';
import Principal from './components/principal';
import FotoGaleria from './components/fotogaleria';

export default props => (
  <Router 
      navigationBarStyle={{ backgroundColor: '#F00' }} 
      titleStyle={{ color: '#000'}} 
      
    >
    
    <Stack key="root">
      <Scene key='boasvindas'   component={BoasVindas}   title="Bem Vindo" hideNavBar={true} initial />
      <Scene key='principal'    component={Principal}    title="Principal" hideNavBar={true} />
      <Scene key='fotosgaleria' component={FotoGaleria}  title="Fotos" hideNavBar={false} />
    </Stack>

  </Router>
)
