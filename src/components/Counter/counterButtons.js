
const counterButtons = (subtract, add, newMatch) => [
    {
        id: 1,
        title: "-1 EN",
        onPress: () => subtract(1),
    },
    {
        id: 2,
        title: "+1 EN",
        onPress: () => add(1),
    },
    {
        id: 3,
        title: "Próxima ronda",
        onPress: () => add(2),
    },
    {
        id: 4,
        title: "Nueva partida",
        onPress: () => newMatch(3),
    }
]


export default counterButtons