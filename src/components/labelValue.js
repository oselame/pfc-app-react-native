import React from 'react';
import { View, Text } from 'react-native';

import { general } from '../styles';


const LabelValue = props => (
    <View style={{ flexDirection: 'row' }}>
        <Text style={ general.sectionText}>{ props.label }:</Text>
        <Text style={ general.sectionTitle}>{ props.value }</Text>
    </View>
);

export default LabelValue;