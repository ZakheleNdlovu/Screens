import { View, Text, Button } from 'react-native'
import React from 'react'

const Screen6 = ({ navigation }) => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'pink'

        }}>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}
            >
                Welcome To Tab 2
            </Text>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold'
                }}>
                Stack 2
            </Text>
            <Button
                title='Go Back'
                onPress={() => navigation.navigate('Stack 3')}
            />
        </View>
    )
}

export default Screen6