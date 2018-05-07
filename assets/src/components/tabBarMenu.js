import React from 'react';
import { View, Text, StatusBar, TouchableHighlight, Image } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';

import { colors } from '../styles';

export default props => (
    <View style={{ backgroundColor: colors.header, elevation: 4, marginBottom: 6, marginTop: 24 }}>
        
        <StatusBar backgroundColor={ colors.header } />
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{ height: 50, justifyContent: 'center' }}>
                <Text style={{ color: "#fff", fontSize: 20, marginLeft: 20}}>Pelada Futebol Clube</Text>
            </View>
        </View>
    
        <TabBar {...props} 
            style={{ backgroundColor: colors.statusbar, elevation: 0 }}
            scrollEnabled
            />
    </View>
);

