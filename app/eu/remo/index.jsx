import React from "react";
import {View, Text, ScrollView,Image, StyleSheet, Dimensions} from 'react-native';


const filmes = [
    {title:'REMO', year: 'O remo é um esporte aquático que envolve o uso de barcos estreitos e longos movidos por remos. Os atletas, chamados de remadores, sentam-se de costas para a direção do movimento e usam os remos para impulsionar o barco pela água. O esporte pode ser praticado tanto individualmente quanto em equipes de até oito remadores.O remo também é um esporte olímpico, com competições internacionais, como o Campeonato Mundial de Remo e os Jogos Olímpicos, sendo realizados regularmente.', image: 'https://aloalobahia.com/images/p/remoCOB.jpg'}
    
];

const TelaFilmes = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}><Text style={styles.Cabecalho}>Remo</Text></View>
            <View style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false}
             contentContainerStyle={styles.scrollViewContainer}
             style={styles.scrollView}>
                {filmes.map((filme, index) =>(
                    <View key={index} style={styles.card}>
                        <Image source={{uri: filme.image}} style={styles.image}/>
                        <Text style={styles.title}>{filme.title}</Text>
                        <Text style={styles.year}>{filme.year}</Text>
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
        textAlign: 'center',
        margin: 10,
        width: 305

      },
    image:{
        height:300,
        width: 300
    }
});

export default TelaFilmes;