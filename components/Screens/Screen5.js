import { View, Text, Button } from 'react-native'
import React from 'react'

const Screen5 = ({ navigation }) => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightgreen'

        }}>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>
                Welcome To Tab 2
            </Text>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold'
                }}>
                Stack 1
            </Text>
            <Button
                title='Next'
                onPress={() => navigation.navigate('Stack 4')}
            />
        </View>
    )
}

export default Screen5