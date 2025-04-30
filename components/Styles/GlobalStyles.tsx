import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { myColors } from './Colors';

export const GlobalStyles = StyleSheet.create({
    buttonBlue: {
    backgroundColor: myColors.blue,
    borderRadius: 8,
    padding: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
},
  buttonGray: { // Asegúrate de que este estilo también esté aquí si lo necesitas usar directamente
    backgroundColor: myColors.gray,
    borderRadius: 8,
    padding: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
},
    viewButton: {
    position: 'absolute',
    bottom: 50,
},
    smallText: {
    fontSize: 14,
    color: '#000',
},
    row: {
    flexDirection: 'row',
    }
});