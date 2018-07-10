import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import BoasVindasScreen from './components/BoasVindasScreen/BoasVindasScreen';
import FotoGaleriaScreen from './components/FotoGaleriaScreen/FotoGaleriaScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';

export default () => (
    <Router>
      <Stack key="root" navigationBarStyle={{ backgroundColor: '#ff0000' }}>
        <Scene key='boasvindas'   component={BoasVindasScreen}   title="Bem Vindo" hideNavBar initial />
        <Scene key='principal'    component={HomeScreen}    title="Principal" hideNavBar />
        <Scene key='fotosgaleria' component={FotoGaleriaScreen}  title="Fotos" hideNavBar={false}  />
      </Stack>
    </Router>
)
