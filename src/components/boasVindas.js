import React,  { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { colors } from '../styles';

export default class BoasVindas extends Component {

    componentDidMount() {
        setTimeout(() => {
            Actions.principal();
        }, 2000);
    }

    render() {
        return (
            <View style={{flex:1, padding: 15, backgroundColor: '#fff'}}>
                <View style={ {flex:1, justifyContent: 'center', alignItems: 'center'} }>
                    <Image source={require('../../assets/splash.png')} />
                </View>
            </View>
        );
    }
}
