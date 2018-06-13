import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import PropTypes from 'prop-types';

class Quadrimestre extends Component {
  
  constructor(props) {
    super(props);
  }

  renderButton(cdQuadrimestre, deQuadrimestre, dangerParam, darkParam, largura = 70) {
    return (
      <Button style={{ width: largura }} dark={darkParam} danger={dangerParam}
          onPress={ () => this.props.selecionaQuadrimestre(this.props.nuAno, cdQuadrimestre ) } 
        >
        <Text>{deQuadrimestre}</Text>
      </Button>
    )
  }

  renderButtonPrimeiroQuadrimestre() {
    let darkParam = this.props.cdQuadrimestre === 1;
    let dangerParam = this.props.cdQuadrimestre !== 1;
    return this.renderButton(1, "1º", dangerParam, darkParam, 70);
  }

  renderButtonSegundoQuadrimestre() {
    let darkParam = this.props.cdQuadrimestre === 2;
    let dangerParam = this.props.cdQuadrimestre !== 2;
    return this.renderButton(2, "2º", dangerParam, darkParam, 70);
  }

  renderButtonTerceiroQuadrimestre() {
    let darkParam = this.props.cdQuadrimestre === 3;
    let dangerParam = this.props.cdQuadrimestre !== 3;
    return this.renderButton(3, "3º", dangerParam, darkParam, 70);
  }

  renderButtonAnual() {
    let darkParam = this.props.cdQuadrimestre === 4;
    let dangerParam = this.props.cdQuadrimestre !== 4;
    return this.renderButton(4, "Anual", dangerParam, darkParam, 90);
  }

  renderButtons() {
    return (
      <View style={{ flexDirection: 'row', justifyContent:'space-around', paddingHorizontal: 10}}>
        { this.renderButtonPrimeiroQuadrimestre() }
        { this.renderButtonSegundoQuadrimestre() }
        { this.renderButtonTerceiroQuadrimestre() }
        { this.renderButtonAnual() }
      </View>
    )
  }

  render() {
    return (
      <View>
        { this.renderButtons() }
      </View>
    );
  } 
}

Quadrimestre.propTypes = {
}

Quadrimestre.defaultProps = {
}

export default Quadrimestre;
