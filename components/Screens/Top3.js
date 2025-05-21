import { View, Text } from 'react-native'
import React from 'react'

const Top3 = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'tomato'

        }}>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}
            >
                Welcome To Tab 3
            </Text>
        </View>
    )
}

export default Top3