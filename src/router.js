import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import BoasVindas from './components/boasVindas';
import Principal from './components/principal';
import FotoGaleria from './components/fotogaleria';

export default props => (
    <Router>
      <Stack key="root" navigationBarStyle={{ backgroundColor: '#ff0000' }}>
        <Scene key='boasvindas'   component={BoasVindas}   title="Bem Vindo" hideNavBar initial />
        <Scene key='principal'    component={Principal}    title="Principal" hideNavBar />
        <Scene key='fotosgaleria' component={FotoGaleria}  title="Fotos" hideNavBar={false}  />
      </Stack>
    </Router>
)
