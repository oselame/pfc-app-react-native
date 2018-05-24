import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default props => {
    if (props.exibeEvolucao) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size='large' color='#ff0000'/>
            </View>
        )
    }
}