import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Text1 = ({ setName, id }) => {
    return (
        <View style={styles.box2}>
            <Text style={styles.text2}>{id}</Text>
            <TextInput style={styles.textInp} onChangeText={val => setName(val)} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: '100%',
        backgroundColor: 'antiquewhite',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    box2: {
        width: '80%',
        backgroundColor: 'antiquewhite',
        alignItems: 'start',
        justifyContent: 'center',

    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 18,
        padding: 2
    },
    textInp: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})
export default Text1