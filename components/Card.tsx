import { View, Text, TouchableOpacity, Image, StyleSheet,Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({

    containerCard:{
        width: 300,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#4166d5',
        borderWidth: 2,
        padding: 20,
        marginBottom: 8

        
    },
    title:{
        fontWeight: 'bold',
        padding: 12
    },
    containerImg:{
        width: 240,
        height: 100,
        borderRadius: 12,
        overflow: 'hidden'
    },
    btn:{
        backgroundColor: '#4166d5',
        width: 250,
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    
    },
    btnText:{
        color: '#fff',
        fontWeight: 'bold'
    }

   
  });


export function Card(props: {title: string, imageUrl: string, pageUrl:string}) {
   
  return (
    <View style={styles.containerCard}>
        <View >
            <Image resizeMode="cover" style={styles.containerImg} source={{ uri: props.imageUrl }}/>


        </View>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => Linking.openURL(props.pageUrl)}>
        <Text style={styles.btnText}>Más Información</Text>

        </TouchableOpacity>
    </View>
  );

 
  

}