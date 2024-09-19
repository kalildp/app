import React from "react";
import {View, Text, ScrollView,Image, StyleSheet, Dimensions} from 'react-native';


const filmes = [
    {title:'transformers', year: 2007, image: 'https://f.i.uol.com.br/fotografia/2018/07/01/15304782085b393e802f653_1530478208_3x2_md.jpg'},
    {title:'efeito borboleta', year: 2004, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JsitvhYy2pvLFVMYR6uxa8FN2mrVLBc2NA&s'},
    {title:'homem aranha', year: 2014, image: 'https://lumiere-a.akamaihd.net/v1/images/espetacular_homem_aranha2_a4e4c8e6.jpeg?region=0,0,750,938'}
];

const TelaFilmes = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}><Text style={styles.Cabecalho}>Filmes</Text></View>
            <View style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false}
             contentContainerStyle={styles.scrollViewContainer}
             style={styles.scrollView}>
                {filmes.map((filme, index) =>(
                    <View key={index} style={styles.card}>
                        <Image source={{uri: filme.image}} style={styles.image}/>
                        <Text style={styles.title}>{filme.title}</Text>
                        <Text>{filme.year}</Text>
                    </View>
                ))}
            </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#EEF1EF',
        height: Dimensions.get('window').height,
        width: '100%'
    },
    main:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Header:{
        backgroundColor:'#A41CFF',
        padding:15,
        
    },
    Cabecalho:{
        fontWeight: 'bold',
        color:'#EEF1EF'

    },
    card:{
        width: '90%',
        alignItems: 'center'
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Cor de fundo do ScrollView
        marginHorizontal: 10,
        width: '100%'
      },
      scrollViewContainer: {
        paddingVertical: 20, // Espaçamento vertical dentro do ScrollView
        alignItems: 'center', // Alinhamento dos itens no centro
        width: '100%'
      },
      title:{
        fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10

      },
      year:{
        fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10

      },
    image:{
        height:300,
        width: 300
    }
});

export default TelaFilmes;