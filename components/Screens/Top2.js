import { View, Text } from 'react-native'
import React from 'react'

const Top2 = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'orange'

        }}>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}
            >
                Welcome To Tab 2
            </Text>
        </View>
    )
}

export default Top2