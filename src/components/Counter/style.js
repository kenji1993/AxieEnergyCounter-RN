import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    energyContainer: {
        alignItems: "center",
        borderRadius: 10,
    },
    energyCounter: {
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
        flexDirection: "row",
        flexWrap: "wrap",
        width: 330,
        height: 100,
        marginTop: 40,
        justifyContent: "center"
    },
})