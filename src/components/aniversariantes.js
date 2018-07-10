import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { carregaAniversariantes } from '../actions/AniversarianteActions';
import ExibeEvolucao from './exibeEvolucao';

class Aniversariantes extends Component {
  componentDidMount() {
    this.props.carregaAniversariantes();
  }

  renderRow = () => this.props.aniversariantes.map((niver) => (
      <ListItem avatar key={niver.nmApelido}>
        <Left>
          <Thumbnail source={{ uri: `data:image/png;base64, ${niver.foto}` }} />
        </Left>
        <Body>
          <Text>{niver.nmApelido}</Text>
          <Text note>{niver.data}</Text>
        </Body>
      </ListItem>
    ))

  render() {
    const { exibeEvolucaoAniversariantes } = this.props;
    return (
        <Container>
          <Content >
            { exibeEvolucaoAniversariantes && <ExibeEvolucao /> }
            <List>
              { this.renderRow() }
            </List>
          </Content>
        </Container>
    );
  }
}

const mapStateToProps = state => ({
  aniversariantes: state.AniversarioReducer.aniversariantes,
  exibeEvolucaoAniversariantes: state.AniversarioReducer.exibeEvolucaoAniversariantes,
});

const mapDispatchToProps = dispatch => bindActionCreators({ carregaAniversariantes }, dispatch);

Aniversariantes.propTypes = {
  carregaAniversariantes: PropTypes.func.isRequired,
  exibeEvolucaoAniversariantes: PropTypes.bool,
  aniversariantes: PropTypes.array
};

Aniversariantes.defaultProps = {
  aniversariantes: [],
  exibeEvolucaoAniversariantes: true
};

Aniversariantes.defaultProps = {
  nuAno: 2018,
};

export default connect(mapStateToProps, mapDispatchToProps)(Aniversariantes);
