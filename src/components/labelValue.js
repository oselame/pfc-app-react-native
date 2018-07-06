import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


const LabelValue = props => (
    <View style={{ flexDirection: 'row' }}>
        <Text>{ props.label }:</Text>
        <Text style={{ fontWeight: 'bold'}}>{ props.value }</Text>
    </View>
);

LabelValue.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default LabelValue;