import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import useCounter from '../../hooks/useCounter'

const Buttons = () => {

    const {add, subtract, nextRound, newMatch} = useCounter()
    
    return (
        <View style={styles.buttons}>
            <Button
                title="-1 EN"
                onPress={() => subtract()}
            />
            <Button
                title="+1 EN"
                onPress={() => add()}
            />
            <Button 
                title='Próxima ronda'
                onPress={() => nextRound()}
            />
            <Button 
                title='Nueva partida'
                onPress={() => newMatch()}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    
})

export default Buttons
