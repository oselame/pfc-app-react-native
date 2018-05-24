import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TabBarMenu from './tabBarMenu';
import UltimaPartida from './ultimaPartida';
import Ranking from './ranking';
import Aniversariantes from './aniversariantes';
import Galeria from './galeria';
import Janta from './jantas';
import Artilheiro from './artilheiro';

import { carregaQuadrimestreAtual } from '../actions/AppActions';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class Principal extends React.Component {
  
  constructor(props) {
    super(props);    
    
    this.state = {
      index: 0,
      nuAnoAtual: 0,
      cdQuadrimestreAtual: 0,
      routes: [
        { key: 'partida', title: 'Partida' },
        { key: 'ranking', title: 'Ranking' },
        { key: 'artilheiros', title: 'Artilheiros' },
        { key: 'aniversarios', title: 'Aniversários' },
        { key: 'janta', title: 'Jantares' },
        { key: 'galerias', title: 'Galerias' }
      ],
    };

    this.props.carregaQuadrimestreAtual();
  }

  componentWillMount() {
    console.log("nuAnoAtual-x", this.props.nuAnoAtual);
    console.log("cdQuadrimestreAtual-s", this.props.cdQuadrimestreAtual);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nuAnoAtual-y", nextProps.nuAnoAtual);
    console.log("cdQuadrimestreAtual-y", nextProps.cdQuadrimestreAtual);
    this.setState({
      nuAnoAtual: nextProps.nuAnoAtual,
      cdQuadrimestreAtual: nextProps.cdQuadrimestreAtual
    });
  }
  
  _handleIndexChange = index => {
      this.setState({ index });
  };

  _renderHeader = props => {
    return (
      <TabBarMenu {...props} />
    );
  }

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

const mapStateToProps = state => ({
  nuAnoAtual: state.AppReducer.nuAnoAtual,
  cdQuadrimestreAtual: state.AppReducer.cdQuadrimestreAtual 
});


const mapDispatchToProps = dispatch => bindActionCreators(
  { carregaQuadrimestreAtual }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Principal);

