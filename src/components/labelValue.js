import React from 'react';
import { View, Text } from 'react-native';


const LabelValue = props => (
    <View style={{ flexDirection: 'row' }}>
        <Text>{ props.label }:</Text>
        <Text style={{ fontWeight: 'bold'}}>{ props.value }</Text>
    </View>
);

export default LabelValue;