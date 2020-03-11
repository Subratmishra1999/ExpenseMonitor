import React from 'react'
import { View, Text } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux'
import register from './Components/register'

const router = () => {
        return (
                <Router>
                        <Stack key="root">
                                <Scene key="register" component={registers} title="register" />
                        
                        </Stack>
                </Router>
        )
}

export default router
