import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { general } from '../styles';

const imprimeSocio = (socios, alinhamento) => {
    return socios.map(socio => {
        if (+socio.nuGol > 0) {
            if (alinhamento === 'flex-end') {
                return (
                    <View key={socio.cdSocio} style={{ flexDirection: 'row', justifyContent: alinhamento}}>
                        <Text>{socio.nmApelido}</Text>
                        <Text style={{width:30, textAlign: 'right'}}>({socio.nuGol})</Text>
                    </View>
                )
            }  else {
                return (
                    <View key={socio.cdSocio} style={{ flexDirection: 'row', justifyContent: alinhamento}}>
                        <Text style={{width:30, textAlign: 'left'}}>({socio.nuGol})</Text>                        
                        <Text>{socio.nmApelido}</Text>
                    </View>
                )
            }
        } else {
            if (alinhamento === 'flex-end') {
                return (
                    <View key={socio.cdSocio} style={{ flexDirection: 'row', justifyContent: alinhamento}}>
                        <Text>{socio.nmApelido}</Text>
                        <Text style={{width:30}}></Text>
                    </View>
                )
            } else {
                return (
                    <View key={socio.cdSocio} style={{ flexDirection: 'row', justifyContent: alinhamento}}>
                        <Text style={{width:30}}></Text>
                        <Text>{socio.nmApelido}</Text>
                    </View>
                )
            }
        }
    })
};

const ListaTimes = props => (
    <View>
        <View>
            <Text style={{ fontSize: 20, color: '#000000' }}>{ props.time }</Text>
        </View>
        <View style={{ alignItems: props.alinhamento}}>
            { imprimeSocio(props.socios, props.alinhamento) }
        </View>
    </View>
);

export default ListaTimes;