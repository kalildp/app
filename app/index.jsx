import React from "react";
import { Text, View } from 'react-native';
import { Link } from 'expo-router'

const router = function(){
    return(
        <View>
        <Link href="/calculadora">
        <Text>Exercício Calculadora</Text>
        </Link>

        <Link href="/Pokemon">
        <Text>Exercício Pokemon</Text>
        </Link>

        <Link href="/santander">
        <Text>Exercício santander</Text>
        </Link>

        <Link href="/splash">
        <Text>Exercício splash</Text>
        </Link>

        <Link href="/tarefas">
        <Text>Exercício tarefas</Text>
        </Link>

        <Link href="/TaskHub">
        <Text>Exercício TaskHub</Text>
        </Link>

        <Link href="/eu">
        <Text>Sobre Mim</Text>
        </Link>

       </View>
    )

}
export default router



