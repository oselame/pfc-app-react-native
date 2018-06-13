import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,
        Body, Title, ScrollableTab } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UltimaPartida from './ultimaPartida';
import Aniversariantes from './aniversariantes';
import Janta from './jantas';
import Galeria from './galeria';
import Ranking from './ranking';
import Artilheiro from './artilheiro';

import { carregaQuadrimestreAtual, carregaListaQuadrimestresPorAno } from '../actions/QuadrimestreActions';

class Principal extends Component {

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
        
        <Content scrollEnabled={false}>
          <Tabs initialPage={0} 
                renderTabBar={()=> <ScrollableTab />} 
                tabBarPosition='top' >
                
            <Tab heading="UltimaPartida">
              <UltimaPartida />
            </Tab>

            <Tab heading="Ranking">
              <Ranking />
            </Tab>

            <Tab heading="Artilheiro">
              <Artilheiro />
            </Tab>

            <Tab heading="Aniversariantes">
              <Aniversariantes />
            </Tab>

            <Tab heading="Jantas">
              <Janta />
            </Tab>

            <Tab heading="Galeria">
              <Galeria />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    )
  }

}

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => bindActionCreators(
  { carregaQuadrimestreAtual, carregaListaQuadrimestresPorAno }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Principal);