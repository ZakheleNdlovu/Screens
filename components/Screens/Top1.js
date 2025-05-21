import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Top1 = () => {
    const [bgColor, setBgColor] = useState('antiquewhite')
    const [textColor, setTextColor] = useState('black')
    const [textColor2, setTextColor2] = useState('white')
    const [title, setTitle] = useState('Dark mode')
    const [btColor, setBtColor] = useState('black')
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: `${bgColor}`

            }}>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: `${textColor}`
                }}
            >
                Welcome To Top Navigator 1
            </Text>

            <TouchableOpacity
                style={{
                    width: '30%',
                    height: '7%',
                    backgroundColor: `${btColor}`,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,

                }}

                onPress={() => {
                    if (bgColor === 'antiquewhite') {
                        setBgColor('black')
                    }
                    else {
                        setBgColor('antiquewhite')
                    }

                    if (textColor === 'black') {
                        setTextColor('white')
                    }
                    else {
                        setTextColor('black')
                    }

                    if (title === 'Dark mode') {
                        setTitle('Light mode')
                    }
                    else {
                        setTitle('Dark mode')
                    }
                    if (btColor === 'black') {
                        setBtColor('white')
                    }
                    else {
                        setBtColor('black')
                    }
                    if (textColor2 === 'white') {
                        setTextColor2('black')
                    }
                    else {
                        setTextColor2('white')
                    }

                }}
            >
                <Text
                    style={{
                        color: `${textColor2}`
                    }}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Top1