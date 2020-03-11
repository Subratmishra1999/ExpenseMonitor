import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class App extends Component {
        render() {
                return (
                        <View>
                                <View style={styles.imageview}>
                                        <Image style={styles.image} source={require('./money.gif')}
                                        />
                                </View>
                        </View>
                )
        }
}

const styles = StyleSheet.create({
        image: {
                width: 200,
                height: 200,
                alignSelf: "center"
        },
        imageview: {
                flex: 1,

        }
})