import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { carregaAniversariantes } from '../actions/AniversarianteActions';

class Aniversariantes extends Component {
    
    componentDidMount() {        
        this.props.carregaAniversariantes();
    }

    renderRow() {
        return this.props.aniversariantes.map( (niver, i) => (
            <ListItem avatar key={i}>
                <Left>
                    <Thumbnail  source={{ uri: `data:image/png;base64, ${niver.foto}` }} />
                </Left>
                <Body>
                    <Text>{niver.nmApelido}</Text>
                    <Text note>{niver.data}</Text>
                </Body>
            </ListItem>
        )
    )}

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        { this.renderRow() }
                    </List>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({ 
    aniversariantes: state.AniversarioReducer.aniversariantes
});

const mapDispatchToProps = dispatch => bindActionCreators( { carregaAniversariantes }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Aniversariantes);
