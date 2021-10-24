import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Axie Energy Counter</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        width: "100%",
        height: 80,
        backgroundColor: "#00897b",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
      },
      title: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold"
      },
})

export default Title
