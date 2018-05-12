import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './tabBarMenu';
import UltimaPartida from './ultimaPartida';
import Ranking from './ranking';
import Aniversariantes from './aniversariantes';
import Galeria from './galeria';
import Janta from './jantas';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class Principal extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Partida' },
      { key: '2', title: 'Ranking' },
      { key: '3', title: 'Aniversários' },
      { key: '4', title: 'Galerias' },
      { key: '5', title: 'Jantares' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    '1': UltimaPartida,
    '2': Ranking,
    '3': Aniversariantes,
    '4': Galeria,
    '5': Janta
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