import React, { Component } from 'react'
import { Text, View, Image ,StyleSheet} from 'react-native'

export default class register extends Component {
        render() {
                return (
                        <View>
                                <Image style={styles.image} source={require('../money.gif')}
                                />
                        </View>
                )
        }
}

const styles=StyleSheet.create({
        image:{
                width: 200,
                height: 200,
                alignSelf: "center",
        },
})