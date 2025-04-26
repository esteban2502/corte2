import { View,Image,Text,StyleSheet } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
export function Header(props:{title:string}){
   
    const styles = StyleSheet.create({
        header: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#4166d5",
            padding: 15,
            gap: 15
            
        
            
        },
        logo: {
            width: 100,
            height: 50,
            marginRight: 10,
            resizeMode: "contain",
            marginLeft: 5,
            marginTop: 20

        },
        title: {
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            alignItems: "center",
           
        },
    });



    return(
        <View style={styles.header}>
            <Fontisto name="atom" size={22} color="white" />
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}