import React, { Component } from 'react'
import {  View } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text,Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SpendAnalytics from './spendAnalytics' ;
import AddExpense from './AddExpense';
import History from './History';
import { decorate, observable } from 'mobx';
// import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';


export default class userHomePage extends Component {
        type="Add"
        render() {
                return (
                        
                        <Container>
                                <Content>
                                        {this.type==="Book" ? <SpendAnalytics /> :null}
                                        {this.type==="Add" ? <AddExpense /> :null}
                                        {this.type==="History" ? <History /> :null}
                                </Content>
                                <Footer>
                                        <FooterTab>
                                                <Button active vertical onPress={()=>{type="Book"}}>
                                                        <Icon name="home"/>
                                                        <Text>Home</Text>
                                                </Button>
                                                <Button id="1" vertical onPress={()=>{type="Add"}}>
                                                        <Icon name="md-add"/>
                                                        <Text>Add</Text>
                                                </Button>
                                                <Button vertical onPress={()=>type="History"}>
                                                        <Icon name="cloud"/>
                                                        <Text>History</Text>
                                                </Button>
                                                
                                        </FooterTab>
                                </Footer>
                                </Container>
                       
                )
        }
}
decorate(userHomePage,{
        type:observable
})