import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import useCounter from '../../hooks/useCounter'

const energy = require('../../images/energy.png')

const Counter = () => {
    
    const { counter, add, subtract, newMatch } =  useCounter(3)

    return (    
        <View style={styles.container}>
            <ImageBackground 
                source={energy} 
                style={styles.image}
            >

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {counter}
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.buttons}>
                <Button
                    title="-1 EN"
                    onPress={() => subtract(1)}
                />
                <Button
                    title="+1 EN"
                    onPress={() => add(1)}
                />
                <Button 
                    title='Próxima ronda'
                    onPress={() => add(2)}
                />
                <Button 
                    title='Nueva partida'
                    onPress={() => newMatch(3)}
                />
                </View>
            </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    titleContainer: {
        alignItems: "center",
        borderRadius: 10,
    },
    title: {
        color: "#ffffff",
        fontSize: 100,
        fontWeight: "bold",
        textShadowOffset: {width: 3, height: 3},
        textShadowColor: "#000000",
        textShadowRadius: 10,
    },
    image: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    buttons: {
        display: "flex",
        flexDirection: "row"
    }
})

export default Counter
