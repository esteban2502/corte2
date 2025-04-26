import { StyleSheet, View,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '@/components/Header';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title='Calculadora'></Header>   
    
      <ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',

  }
});
