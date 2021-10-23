import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import useCounter from '../../hooks/useCounter'
import CustomButton from '../CustomButton/CustomButton'
import counterButtons from './counterButtons'
import { styles } from './style'

const energy = require('../../images/energy.png')

const Counter = () => {
    
    const { counter, add, subtract, newMatch } =  useCounter(3)

    return (    
        <View style={styles.container}>
            <ImageBackground 
                source={energy} 
                style={styles.image}
            >

                <View style={styles.energyContainer}>
                    <Text style={styles.energyCounter}>
                        {counter}
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.buttons}>
                {
                    counterButtons( subtract, add, newMatch).map(({id, title, onPress}) => 
                        // <Button
                        //     // color="#2196F3"
                        //     key={id}
                        //     title={title}
                        //     onPress={onPress}
                        //     style={styles.boton}
                        // />
                        <CustomButton
                            key={id}
                            title={title}
                            onPress={onPress}
                        />
                    )
                }
                </View>
            </View>
    )
}



export default Counter
