import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
})

const tarefas = [
    {id:1,nome:'tarefa1',feito:false, data:'15/08/2024'},
    {id:2,nome:'tarefa2',feito:false, data:'15/06/2024'},
    {id:3,nome:'tarefa3',feito:false, data:'01/07/2024'},
    {id:4,nome:'tarefa4',feito:false, data:'08/08/2024'}
]

const Item = ({nome}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{nome}</Text>
    </View>
  );
  
  const App = () => {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={tarefas}
          renderItem={({item}) => <Item nome={item.nome} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  };

  export default App;