import React, { Component } from 'react'
import {  View } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text,Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SpendAnalytics from './spendAnalytics' ;
import AddExpense from './AddExpense';
import History from './History';
import { decorate, observable, observe } from 'mobx';
// import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';


export default class userHomePage extends Component {
        state={
                type:"Book"
        }
        render() {
                return (
                        
                        <Container>
                                <Content>
                                        {this.state.type==="Book" ? <SpendAnalytics /> :null}
                                        {this.state.type==="Add" ? <AddExpense /> :null}
                                        {this.state.type==="History" ? <History /> :null}
                                </Content>
                                <Footer>
                                        <FooterTab>
                                                <Button active={(this.state.type==="Book") ? true : false} vertical onPress={()=>{this.setState({type:"Book"})}}>
                                                        <Icon name="home"/>
                                                        <Text>Home</Text>
                                                </Button>
                                                <Button active={this.state.type==="Add" ? true: false} id="1" vertical onPress={()=>{this.setState({type:"Add"})}}>
                                                        <Icon name="md-add"/>
                                                        <Text>Add</Text>
                                                </Button>
                                                <Button active={this.state.type==="History" ? true: false} vertical onPress={()=>{this.setState({type:"History"})}}>
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
        type:observable,
        
})