import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { setCredentials } from '../helpers/setCredentials'
import { GlobalContext } from '../../store/store'

export default function profile({ navigation }) {
    const {dispatch} = useContext(GlobalContext)
    async function logout() {
        setCredentials(null)
        dispatch({type: 'LOGOUT'})
    }
    return (
        <View style={styles.container}>
            <Button title={"Logout"} onPress={logout}/>
            <Text>Hello World -  Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
