
import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import { Link } from "expo-router";

export default function SobreHome() {

  const data = [
    { id: '1', link: './filmes', titulo: 'filmes' },
    { id: '2', link: './remo', titulo: 'remo' }
  ];
  
  return (
    <>
        <View style={styles.container}>
           <View style={styles.Header}><Text style={styles.Cabecalho}>Sobre Mim</Text></View>
        <View style={styles.main}>
            <Image 
             style={styles.perfil}
             source={require('../../assets/images/eu.jpg')}
            />
            <Text style={styles.welcome}>Bem-vindo</Text>
            <Text style={styles.descricao}>Sou um aluno de Desenvolvimento de Sistemas, amo filmes e remo, por isso trouxe esses temas para esse App</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link style={styles.link} href={item.link}>
                        {item.titulo}
                    </Link>
                )}
            />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#EEF1EF'
    },

    main:{
      flex: 1,
      alignItems: 'center',
      marginTop: 30,
      
    },

    perfil: {
      width: 200,
      height: 200,
      overflow: 'hidden',
      borderRadius: parseInt('100%')
    },

    welcome:{
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 10
    },

    descricao: {
      textAlign: 'center',
      margin: 10,
      width: 305
    },

    link:{
      backgroundColor: '#000000',
      margin: 10,
      padding: 5,
      width: 300,
      color: '#A41CFF',
      textAlign: 'center'
    },
    Header:{
        backgroundColor:'#A41CFF',
        padding:15,
        
    },
    Cabecalho:{
        fontWeight: 'bold',
        color:'#EEF1EF'

    }

  });