import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form, View, Text } from "native-base";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { carregaListaQuadrimestresPorAno } from '../actions/QuadrimestreActions';

class Quadrimestre extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nuAno: props.nuAno,
      cdQuadrimestre: props.cdQuadrimestre,
      exibeSegundoQuadrimestre: false,
      exibeTerceiroQuadrimestre: false,
      quadrimestresAnos: []
    };

    this.props.carregaListaQuadrimestresPorAno();
  }

  componentWillReceiveProps(nextProps) {
    //this.montaQuadrimestres(nextProps.nuAno);
  }
  
  montaQuadrimestres(nuAno) {
    if (this.props.quadrimestresAnos.length > 0) {
      const anoSelecionado = this.props.quadrimestresAnos.filter(ano => (
        ano.nuAno === nuAno
      ));

      const exibe2Quadri = anoSelecionado[0].quadrimestres.some(quadr => ( quadr.cdQuadrimestre === 2 ));
      const exibe3Quadri = anoSelecionado[0].quadrimestres.some(quadr => ( quadr.cdQuadrimestre === 3 ));
    
      this.setState({
        quadrimestresAnos: anoSelecionado[0].quadrimestres,
        exibeSegundoQuadrimestre: exibe2Quadri,
        exibeTerceiroQuadrimestre: exibe3Quadri
      });

    }
  }

  onValueChange(value) {
    this.setState({
      nuAno: value
    });

    this.montaQuadrimestres(value);
  }

  renderRow() {
    return this.props.quadrimestresAnos.map((dado, i) => (
          <Picker.Item key={i}
            label={'' + dado.nuAno} 
            value={dado.nuAno} />
      )
    ).reverse()  
  }

  renderButtonSegundoQuadrimestre() {
    if (this.props.exibeSegundoQuadrimestre) {
        return (
          <Button transparent danger>
            <Text>2º Quadr.</Text>
          </Button>
        )
    }
  }

  renderButtonTerceiroQuadrimestre() {
    if (this.props.exibeTerceiroQuadrimestre) {
        return (
          <Button transparent danger>
            <Text>3º Quadr.</Text>
          </Button>
        )
    }
  }

  renderButtons() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'space-between' }}>
        <Button transparent danger>
          <Text>1º Quadr.</Text>
        </Button>
        
        { this.renderButtonSegundoQuadrimestre() }
        { this.renderButtonTerceiroQuadrimestre() }
        
        <Button transparent dark>
          <Text>Anual</Text>
        </Button>
      </View>
    )
  }

  renderPicker() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'flex-start' }}>
        <Text style={{ textAlign: 'right', width: 60 }}>Ano:</Text>
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          style={{ width: 80 }}
          selectedValue={this.state.nuAno}
          onValueChange={this.onValueChange.bind(this)}
          >
          { this.renderRow() } 
        </Picker>
      </View>
    )
  }

  render() {
    return (
        <View>
            { this.renderPicker() }
            { this.renderButtons() }
        </View>
    );
  } 
}

const mapStateToProps = state => ({
  quadrimestresAnos: state.QuadrimestreReducer.quadrimestresAnos
});


const mapDispatchToProps = dispatch => bindActionCreators(
    { carregaListaQuadrimestresPorAno }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Quadrimestre);
