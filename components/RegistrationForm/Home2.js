import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Text1 from './Text1'

const Home2 = ({ navigation }) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    return (
        <View
            style={styles.box}
        >
            <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text2}>ὕ</Text>
                <Text style={styles.text}>Hello World!</Text>

            </View>

            <View style={{ height: '65%', width: '100%', alignItems: 'center' }}>
                <Text1 id={'Name'} setName={setName} />

                <Text1 id={'Surname'} setName={setSurname} />

                <Text1 id={'Age'} setName={setAge} />

                <Text1 id={'E-mail'} setName={setEmail} />
                <View style={{ height: '5%' }}></View>
                <TouchableOpacity
                    style={styles.bt}
                    onPress={() => {
                        alert('Welcome'),
                            navigation.navigate('Details', {
                                name: name,
                                surname: surname,
                                age: age,
                                email: email
                            },

                            )
                    }}
                >
                    <Text style={styles.btText}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: '10%', justifyContent: 'flex-end', padding: 5 }}>
                <Text style={styles.text3}>©Mzakesman</Text>
            </View>
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
    box2: {
        width: '80%',
        height: '96%',
        backgroundColor: 'antiquewhite',
        alignItems: 'start',
        justifyContent: 'center',

    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        display: 'flex',
        padding: 10
    },
    text2: {
        fontSize: 70,
        padding: 2,

    },
    text3: {
        fontSize: 13,
        padding: 2
    },
    textInp: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid'
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

export default Home2