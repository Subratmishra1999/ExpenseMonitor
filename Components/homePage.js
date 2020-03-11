import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'
import {Button} from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class homePage extends Component {
        render() {
                return (
                        <View style={{flex:1,flexDirection:'column'}}>
                                <View style={styles.imageview}>
                                        <Image style={styles.image} source={require('../money.gif')}
                                        />
                                </View>
                                <View style={styles.view}>
                                        <Button  success style={styles.signin}  mode="contained" onPress={() => console.log('Pressed')}>
                                                <Text>Sign in</Text>
                                        </Button>
                                        <Button  success style={styles.signin}  mode="contained" onPress={() => {Actions.register()}}>
                                                <Text>Register</Text>
                                        </Button>
                                </View>
                                

                        </View>
                )
        }
}

const styles = StyleSheet.create({
        image: {
                width: 200,
                height: 200,
                alignSelf: "center",
        },
        imageview: {
                flex: 2,

        },
        view:{
                flex:2,
                flexDirection:"row",
                justifyContent:"space-around",

        },
        signin:{
                width:100,
                justifyContent:"center"
        }
})