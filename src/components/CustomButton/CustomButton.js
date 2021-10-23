import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({title, onPress, id}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            key={id}
            style={styles.button}
            activeOpacity={0.9}
        >
            <Text
                style={styles.buttonText}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ff8a80",
        width: 150,
        height: 70,
        margin: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
        borderWidth: 5,
        borderColor: "#ffffbf",
    },
    buttonText: {
        color: "#ffffbf",
        fontWeight: "800",
        fontSize: 20
    }
})

export default CustomButton
