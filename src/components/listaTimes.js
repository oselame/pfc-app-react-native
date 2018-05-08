import React, { Component } from 'react';import { View, Text, FlatList, Image } from 'react-native';

import { general } from '../styles';



class ListaTimes extends Component {
    imprimeSocio(socios, alinhamento) {
        return socios.map(socio => {
            if (+socio.nuGol > 0) {
                if (alinhamento === 'flex-end') {
                    return (
                        <View key={socio.cdSocio} style={{ flexDirection: 'row', alignItems: alinhamento}}>
                            <Text>{socio.nmApelido}</Text>
                            <Text style={{width:25, textAlign: 'right'}}>({socio.nuGol})</Text>
                        </View>
                    )
                }  else {
                    return (
                        <View key={socio.cdSocio} style={{ flexDirection: 'row', alignItems: alinhamento}}>
                            <Text style={{width:25, textAlign: 'left'}}>({socio.nuGol})</Text>                        
                            <Text>{socio.nmApelido}</Text>
                        </View>
                    )
                }
            } else {
                if (alinhamento === 'flex-end') {
                    return (
                        <View key={socio.cdSocio} style={{ flexDirection: 'row', alignItems: alinhamento}}>
                            <Text>{socio.nmApelido}</Text>
                            <Text style={{width:25}}></Text>
                        </View>
                    )
                } else {
                    return (
                        <View key={socio.cdSocio} style={{ flexDirection: 'row', alignItems: alinhamento}}>
                            <Text style={{width:25}}></Text>
                            <Text>{socio.nmApelido}</Text>
                        </View>
                    )
                }
            }
        })
    };

    imprimeTime() {
        if (this.props.alinhamento === 'flex-end') {
            return (
                <View style={{ alignItems: this.props.alinhamento, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, color: '#000000', paddingRight: 5 }}>{ this.props.time }</Text>
                    <Image source={ require('../../assets/camiseta.png') } 
                                style={{ backgroundColor: this.props.corCamisa, 
                                         width:25, height: 30,
                                         alignItems: this.props.alinhamento}}/>
                </View>
            )
        } else {
            return (
                <View style={{ alignItems: this.props.alinhamento, flexDirection: 'row' }}>
                    <Image source={ require('../../assets/camiseta.png') } 
                                style={{ backgroundColor: this.props.corCamisa, 
                                         width:25, height: 30,
                                         alignItems: this.props.alinhamento }}/>
                    <Text style={{ fontSize: 20, color: '#000000', paddingLeft: 5 }}>{ this.props.time }</Text>
                </View>
            )
        }
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

export default ListaTimes;