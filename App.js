import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* <Text>To do App!</Text> */}
        <TextInput
        style={styles.textInput} 
        placeholder="Write a to do."/> 
        <Button
          title="Add To do"
          onPress={() => console.log("hello")}
        />
      </View>
      <View>
        <Text>List of To do!</Text>
      </View>
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
  }
});
