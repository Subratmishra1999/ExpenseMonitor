import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Button } from 'native-base';
import register from './Components/register'
// import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import { Router, Scene } from 'react-native-router-flux'
import homePage from './Components/home';
import signIn from './Components/signIn'
import userHomePage from './Components/homePage';

export default class App extends Component {
        render() {
                return (
                        <Router>
                                <Scene key="root">
                                        <Scene key="homePage" component={homePage} title="Expense Monitor"/>
                                        <Scene key="register" component={register} title="Sign up" />
                                        <Scene key="signIn" component={signIn} title="Sign in" />
                                        <Scene key="homePage" component={userHomePage} title="Analytics" />
                                </Scene>
                        </Router>
                )
        }
}

