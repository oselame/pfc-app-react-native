import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const camiseta = require('../../assets/camiseta.png');

class ListaTimes extends Component {


    imprimeSocio = (socios, alinhamento) => socios.map(socio => {
        const textAlign = alinhamento === 'flex-end' ? 'right' : 'left'; 
        const alignRight = textAlign === 'right';
        const gols = +socio.nuGol > 0;
        return (
            <View key={socio.cdSocio} style={{ flexDirection: 'row', alignItems: alinhamento}}>
                { alignRight && <Text>{socio.nmApelido}</Text> }
                { gols && <Text style={{width:25, textAlign }}>({socio.nuGol})</Text> }
                { !gols && <Text style={{width:25, textAlign }} /> }
                { !alignRight && <Text>{socio.nmApelido}</Text> }
            </View>
        )
    });

    imprimeTime = () => {
        const textAlign = this.props.alinhamento === 'flex-end' ? 'right' : 'left'; 
        const alignRight = textAlign === 'right';
        return (
            <View style={{ alignItems: this.props.alinhamento, flexDirection: 'row' }}>
                { alignRight && <Text style={{ fontSize: 20, color: '#000000', paddingRight: 5 }}>{ this.props.time }</Text>}
                    <Image source={ camiseta } 
                            style={{ backgroundColor: this.props.corCamisa, 
                                width:25, height: 30,
                                alignItems: this.props.alinhamento}}/>
                { !alignRight && <Text style={{ fontSize: 20, color: '#000000', paddingRight: 5 }}>{ this.props.time }</Text>}
            </View>
        )
    }

    render() {
        return (
            <View>
                { this.imprimeTime() }
                <View style={{ alignItems: this.props.alinhamento}}>
                    { this.imprimeSocio(this.props.socios, this.props.alinhamento) }
                </View>
            </View>
        )
    }
}

ListaTimes.propTypes = {
    alinhamento: PropTypes.string.isRequired,
    corCamisa: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    socios: PropTypes.array,
};

ListaTimes.defaultProps = {
    socios: []
}


export default ListaTimes;