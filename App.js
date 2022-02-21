import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [todoItem, setTodoItem] = useState("")
  const [todoList, setTodoList] = useState([])


  const addTodoList = () => {
    setTodoList([...todoList, todoItem])
    setTodoItem("")
  }
  return (
    <View style={styles.container}>
      <View>
        {/* <Text>To do App!</Text> */}
        <TextInput
        style={styles.textInput} 
        placeholder="Write a to do."
        onChangeText={text => setTodoItem(text)}
        value={todoItem}
        /> 
        <Button
          title="Add To do"
          onPress={addTodoList}
        />
      </View>
      <ScrollView>
        {
          todoList.map((todo, index) => <View key={index} style={styles.todoItem}><Text>{todo}</Text></View>)
        }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60
  },
  textInput: {
    padding: 10,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10
  },
  todoItem: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  }
});
