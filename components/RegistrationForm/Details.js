import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Details = ({ navigation }) => {

    const route = useRoute()
    const { name, surname, age, email } = route.params
    return (
        <View style={styles.box}>
            <Text>Hello {name}! </Text>
            <Text>{surname}</Text>
            <TouchableOpacity
                style={styles.bt}
                onPress={() => navigation.navigate('Register')}
            >

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: '100%',
        backgroundColor: 'antiquewhite',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bt: {
        width: '25%',
        height: 35,
        backgroundColor: 'black',
        borderRadius: 5,
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btText: {
        color: 'white',
        fontSize: 20
    }
})
export default Details