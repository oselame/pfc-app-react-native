import React, { Component } from 'react';
import { Container, Header, Tab, Tabs,
        Body, Title, ScrollableTab } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UltimaPartidaScreen from '../UltimaPartidaScreen/UltimaPartidaScreen';
import AniversariantesScreen from '../AniversariantesScreen/AniversariantesScreen';
import ArtilheiroScreen from '../ArtilheiroScreen/ArtilheiroScreen';
import RankingScreen from '../RankingScreen/RankingScreen';
import JantaScreen from '../JantaScreen/JantaScreen';
import GaleriaScreen from '../GaleriaScreen/GaleriaScreen';
import HistoriaScreen from '../HistoriaScreen/HistoriaScreen';

import { carregaQuadrimestreAtual, carregaListaQuadrimestresPorAno } from '../../actions/QuadrimestreActions';

class HomeScreen extends Component {

  componentDidMount() {
    this.props.carregaQuadrimestreAtual();
    this.props.carregaListaQuadrimestresPorAno();
  }
  
  render() {
    return (
        <Container >
          <Header hasTabs noLeft>
            <Body>
              <Title>Pelada Futebol Clube</Title>              
            </Body>
          </Header>
          
            <Tabs initialPage={0} 
                  renderTabBar={()=> <ScrollableTab />} 
                  tabBarPosition='top' 
                  locked>
                  
              <Tab heading="UltimaPartida">
                <UltimaPartidaScreen />
              </Tab>

              <Tab heading="Ranking">
                <RankingScreen />
              </Tab>

              <Tab heading="Artilheiro">
                <ArtilheiroScreen />
              </Tab>

              <Tab heading="Aniversariantes">
                <AniversariantesScreen />
              </Tab>

              <Tab heading="Jantas">
                <JantaScreen />
              </Tab>

              <Tab heading="Galeria">
                <GaleriaScreen />
              </Tab>

              <Tab heading="História">
                <HistoriaScreen />
              </Tab>
            </Tabs>

        </Container>
    )
  }

}

HomeScreen.propTypes = {
  carregaQuadrimestreAtual: PropTypes.func.isRequired,
  carregaListaQuadrimestresPorAno: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  { carregaQuadrimestreAtual, carregaListaQuadrimestresPorAno }, dispatch);

export default connect(null, mapDispatchToProps)(HomeScreen);