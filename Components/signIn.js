import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Form, Item, Input, Content } from 'native-base'
import { Button } from 'react-native-paper'


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
                                        <Button mode="contained" onPress={() => { console.log("form submitted") }} >
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