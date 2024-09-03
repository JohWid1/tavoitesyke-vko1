import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [heartratelow, setHeartRateLow] = useState(0)
  const [heartratehigh, setHeartRateHigh] = useState(0)

  useEffect(() => {
    if (age) {
        setHeartRateLow((220 - age) * 0.65);
        setHeartRateHigh((220 - age) * 0.85); 
    } else {
      setHeartRateLow(0);
      setHeartRateHigh(0);
    }
  }, [age]);
  

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput 
        placeholder='enter age'
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Text>Limits</Text>
      <Text>{heartratelow} - {heartratehigh}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginTop: 50,
    marginLeft: 10,
  },
});
