import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Container, Content } from 'native-base';

class Progress extends React.Component {

    state = {}

    render() {
        return (
            <Container>
                <Content enableResetScrollToCoords={false} 
                        contentContainerStyle={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
                    <View>
                        <ActivityIndicator size='large' color='#ff0000' />
                    </View>
                </Content>
            </Container>
        )
    }
}

export default Progress;