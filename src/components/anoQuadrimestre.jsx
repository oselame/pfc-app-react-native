import React, { Component } from "react";
import { Picker, View } from "native-base";
import PropTypes from 'prop-types';

/**
* @augments {Component<{  nuAno:number.isRequired,  quadrimestresAnos:array.isRequired,  onChangeAno:Function.isRequired>}
*/
class AnoQuadrimestre extends Component {
  
  constructor(props) {
    super(props);
  }

  renderRowPicker() {
    return this.props.quadrimestresAnos.map((dado, i) => (
          <Picker.Item key={i}
            label={'' + dado.nuAno} 
            value={dado.nuAno} />
      )
    ).reverse()  
  }

  onValueChange(nuAnoParam) {
    this.props.onChangeAno( nuAnoParam );
  }

  renderPicker() {
    return (
        <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.props.nuAno}
            onValueChange={this.onValueChange.bind(this)} >
          { this.renderRowPicker() }
        </Picker>
    )
  }
  
  render() {
    return (
      <View style={{ paddingHorizontal: 10 }}>
        { this.renderPicker() }
      </View>
    );
  } 
}

AnoQuadrimestre.propTypes = {
  nuAno: PropTypes.number.isRequired,
  quadrimestresAnos: PropTypes.array.isRequired,
  onChangeAno: PropTypes.func.isRequired
}

AnoQuadrimestre.defaultProps = {
  nuAno: 2018
}

export default AnoQuadrimestre;
