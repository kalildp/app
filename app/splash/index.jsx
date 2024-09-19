import React from "react";
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const style = StyleSheet.create ({
    container:{
    flex:1,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent: 'center'
    },
    logo:{
        width:100,
        height: 100,
    alignItems:'center',
    justifyContent: 'center'

    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
      },
    
})

const splashScreen = function () {
    const logoIst= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAHSjq7Gk3-FboSL_OMkC42bdCkxD12e4mw&s'
    return <View style={style.container}>
        <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={style.background}
      />
    <Image
    style={style.logo}          
    source={{
        uri: logoIst,
    }}
    />

    </View>
    
}


export default splashScreen