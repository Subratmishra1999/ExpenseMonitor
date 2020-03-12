import React, { Component } from 'react'
import {  View } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';


export default class userHomePage extends Component {
        render() {
                return (
                        
                        <Container>
                                <Content></Content>
                                <Footer>
                                        <FooterTab>
                                                <Button>
                                                        <Text>Home</Text>
                                                </Button>
                                                <Button>
                                                        <Text>Add</Text>
                                                </Button>
                                                <Button>
                                                        <Text>History</Text>
                                                </Button>
                                                
                                        </FooterTab>
                                </Footer>
                                </Container>
                       
                )
        }
}
