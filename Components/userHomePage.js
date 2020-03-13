import React, { Component } from 'react'
import {  View } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text,Icon } from 'native-base';
// import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';


export default class userHomePage extends Component {
        render() {
                return (
                        
                        <Container>
                                <Content></Content>
                                <Footer>
                                        <FooterTab>
                                                <Button vertical>
                                                        <Icon name="home"/>
                                                        <Text>Home</Text>
                                                </Button>
                                                <Button vertical>
                                                        <Icon name="md-add"/>
                                                        <Text>Add</Text>
                                                </Button>
                                                <Button vertical>
                                                        <Icon name="cloud"/>
                                                        <Text>History</Text>
                                                </Button>
                                                
                                        </FooterTab>
                                </Footer>
                                </Container>
                       
                )
        }
}
