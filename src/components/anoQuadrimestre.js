import React, { Component } from 'react';
import { Picker, View } from 'native-base';
import PropTypes from 'prop-types';

/**
* @augments {Component<{  nuAno:number.isRequired,  quadrimestresAnos:array.isRequired,  onChangeAno:Function.isRequired>}
*/
class AnoQuadrimestre extends Component {

  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(nuAnoParam) {
    this.props.onChangeAno(nuAnoParam);
  }

  renderRowPicker() {
    return this.props.quadrimestresAnos.map((dado) => (
      <Picker.Item
        key={dado.nuAno}
        label={`${dado.nuAno}`}
        value={dado.nuAno}
      />
    )).reverse();
  }


  renderPicker() {
    return (
      <Picker
        iosHeader="Select one"
        mode="dropdown"
        selectedValue={this.props.nuAno}
        onValueChange={this.onValueChange}
      >
        { this.renderRowPicker() }
      </Picker>
    );
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
  onChangeAno: PropTypes.func.isRequired,
};

AnoQuadrimestre.defaultProps = {
  nuAno: 2018,
};

export default AnoQuadrimestre;
