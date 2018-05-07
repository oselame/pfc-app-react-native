import React from 'react';
import { View, Button, Image, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { colors } from '../styles';

export default props => (
    <View style={{flex:1, padding: 15, backgroundColor: '#fff'}}>
        <View style={ {flex:10, justifyContent: 'center', alignItems: 'center'} }>
            <Image source={require('../../assets/splash.png')} />
        </View>

        <View style={{flex:1, height: 20}}>
            <Button title="Goooooooooolll"
                color={ colors.welcomeButton }
                accessibilityLabel="Goooooollllll"
                onPress={() => Actions.principal() } />
        </View>
    </View>
);
