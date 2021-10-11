import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Counter from './src/components/Counter/Counter';
import Title from './src/components/Title/Title';

const background = require('./src/images/backgroundImage.jpg')


const App = () => {
  

  return (
    <ImageBackground 
        source={background} 
        resizeMode='cover' 
        style={styles.backgroundImage}
      >
      <View style={styles.container}>
        
        <Title/>
        <Counter/>
      </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
  }, 
  
});

export default App;
