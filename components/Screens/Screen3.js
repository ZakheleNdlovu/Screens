import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Screen3 = ({ navigation }) => {
    const [text1, setText1] = useState('')
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
                }}
            >
                Welcome to Tab 1
            </Text>

            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold'
                }}>
                Stack 1
            </Text>
            <TextInput
                onChangeText={val => setText1(val)}
                placeholder='Enter Your Name'
                style={{
                    width: '70%',
                    borderColor: 'black',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderRadius: 10,
                    padding: 5

                }} />
            <View style={{ height: 10 }}></View>
            <Button title='next' onPress={() => navigation.navigate('Stack 2', { aa: text1 })} />
        </View>
    )
}

export default Screen3