import { View, Text, Button } from 'react-native'
import React from 'react'

const Screen2 = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'

        }}>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>
                Welcome to Screen 2
            </Text>
            <Button title='Back' />
        </View>
    )
}

export default Screen2