import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Form, Item, Input, Content } from 'native-base'
import { Button } from 'react-native-paper'
import { Actions } from 'react-native-router-flux'


export default class signIn extends Component {
        render() {
                return (
                        <View>
                                <Image style={styles.image} source={require('../money.gif')}
                                />

                                <Form>
                                        <Item>
                                                <Input placeholder="Username" />
                                        </Item>
                                        <Item>
                                                <Input placeholder="Password" />
                                        </Item>
                                        <Button mode="contained" onPress={() => { Actions.homePage() }} >
                                                <Text>Submit</Text>
                                        </Button>
                                </Form>
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
})