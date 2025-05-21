import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'

const Screen4 = ({ navigation, route }) => {

    return (
        <View style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightblue'
        }}>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    padding: 10
                }}
            >
                Hello {route.params.aa ? `${route.params.aa}😀` : `No name🙄`}!
            </Text>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}
            >
                Welcome to Tab 1
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
                onPress={() => navigation.navigate('Stack 1')}
                color={'black'}
            />
        </View>
    )
}

export default Screen4