import { SafeAreaView, StyleSheet, View, FlatList, Pressable, Text, Image, ScrollView } from "react-native"
import Bar from "../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from "expo-router";
import { useEffect, useState } from "react";

const Memoria = () => {
    const [memorias, setMemorias] = useState(null)

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('memoria');
            console.log(jsonValue != null ? JSON.parse(jsonValue) : null)
            setMemorias(JSON.parse(jsonValue))
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Bar
                Titulo={'Memória'}
                href={'/'}
                icon={<Entypo name="home" size={24} color="white" />}
                cor={'#229954'}
            />
            <SafeAreaView style={styles.container}>
                    
                        <Pressable style={styles.btnnew}>
                            <Link href={'/memoria/novamemoria'}>
                            <View style={styles.centro}>
                                <Entypo name="plus" size={34} color="white" />
                            </View>  
                            </Link>
                        </Pressable>
                  
                {memorias ? <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
                    {memorias.map((memoria, index) => (


                        <View style={styles.card} key={index}>
                            <Image
                                style={styles.img}
                                source={{ uri: memoria.Img }}
                            />
                            <Text style={styles.h1}>{memoria.Titulo}</Text>
                            <Text style={styles.p}>{memoria.Descricao}</Text>
                            <View >
                                <View style={styles.extraBox}>
                                    <FontAwesome name="map-marker" size={14} color='#229954'/>
                                    <Text style={styles.extra}>{memoria.Localizacao}</Text>
                                </View>
                                <View style={styles.extraBox}>
                                    <Entypo name="calendar" size={12} color='#229954' />
                                    <Text style={styles.extra}>{memoria.Ano}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView> : <View></View>}


            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    list: {
        padding: 10,
        minHeight: '20vh',
        maxHeight: '100vh',
        marginVertical: 14
    },
    btnnew: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27AE60', // Verde escuro vibrante
        borderRadius: 30,
        marginVertical: 10,
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1
    },
    centro: {
        alignItems: 'center',
    },
    img: {
        width: 280,
        height: 280,
        position: 'relative',
        borderRadius: 10,
        resizeMode: 'cover'
    },
    card: {
        backgroundColor: '#A9DFBF', // Verde claro
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        gap: 8,
        marginBottom: 12,
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 280,
        textAlign: 'center',
        color: '#145A32' // Verde bem escuro
    },
    p: {
        fontSize: 14,
        width: 280,
        textAlign: 'center',
        color: '#1E8449' // Verde intermediário
    },
    extra: {
        fontSize: 13,
        color: '#229954', // Verde claro vibrante
        width: 280,
        textAlign: 'center'
    },
    extraBox: {
        flexDirection: 'row',
        gap: 10
    }
})

export default Memoria