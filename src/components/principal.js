import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './tabBarMenu';
import UltimaPartida from './ultimaPartida';
import Ranking from './ranking';
import Aniversariantes from './aniversariantes';
import Galeria from './galeria';
import Janta from './jantas';
import Artilheiro from './artilheiro';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class Principal extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'partida', title: 'Partida' },
      { key: 'ranking', title: 'Ranking' },
      { key: 'artilheiros', title: 'Artilheiros' },
      { key: 'aniversarios', title: 'Aniversários' },
      { key: 'janta', title: 'Jantares' },
      { key: 'galerias', title: 'Galerias' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    'partida': UltimaPartida,
    'ranking': Ranking,
    'artilheiros': Artilheiro,
    'aniversarios': Aniversariantes,
    'janta': Janta,
    'galerias': Galeria
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});