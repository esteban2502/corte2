import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '@/components/Header';
import { useState } from 'react';
import { GlobalStyles } from '@/components/Styles/GlobalStyles';
import Button from '@/components/Button';

export default function HomeScreen() {
  const [input, setInput] = useState<string>(''); // Guarda lo que el usuario escribe
  const [result, setResult] = useState<string>(''); // Guarda el resultado

  const handlePress = (value: string) => {
    setInput(prev => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input); // esta es como una funcion usada solo para propósitos académicos
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Calculadora" />

      <ScrollView contentContainerStyle={styles.calculatorContainer}>
        <View style={styles.resultContainer}>
          <Text style={styles.inputText}>{input}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={GlobalStyles.row}>
            <Button title="7" onPress={() => handlePress('7')} />
            <Button title="8" onPress={() => handlePress('8')} />
            <Button title="9" onPress={() => handlePress('9')} />
            <Button title="÷" isBlue onPress={() => handlePress('/')} />
          </View>
          <View style={GlobalStyles.row}>
            <Button title="4" onPress={() => handlePress('4')} />
            <Button title="5" onPress={() => handlePress('5')} />
            <Button title="6" onPress={() => handlePress('6')} />
            <Button title="×" isBlue onPress={() => handlePress('*')} />
          </View>
          <View style={GlobalStyles.row}>
            <Button title="1" onPress={() => handlePress('1')} />
            <Button title="2" onPress={() => handlePress('2')} />
            <Button title="3" onPress={() => handlePress('3')} />
            <Button title="-" isBlue onPress={() => handlePress('-')} />
          </View>
          <View style={GlobalStyles.row}>
            <Button title="C" isGray onPress={handleClear} />
            <Button title="0" onPress={() => handlePress('0')} />
            <Button title="=" isBlue onPress={handleCalculate} />
            <Button title="+" isBlue onPress={() => handlePress('+')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  calculatorContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  resultContainer: {
    marginBottom: 20,
  },
  inputText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
  },
  resultText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginBottom: 30,
  },
});
