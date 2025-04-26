import { Card } from '@/components/Card';
import { Header } from '@/components/Header';
import {  StyleSheet} from 'react-native';


import { View,Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const news = [
    {
      title: "Científicos crean un robot con visión 'sobrehumana'," ,
      imageUrl: "https://assets.weforum.org/article/image/large_sJzo9Ah7OUBByibbakehZs_3ES4vgQrlyjJeY81drTc.jpg",
      pageUrl: "https://es.weforum.org/stories/2025/02/cientificos-desarrollan-un-sistema-de-vision-robotica-sobrehumano-y-otras-noticias-sobre-tecnologia-que-debes-leer/"
    },
    {
      title: "La ciencia latinoamericana se une contra la pérdida de biodiversidad" ,
      imageUrl: "https://www.caf.com/media/4669878/s-n-pattenden-3nzhqj3md10-unsplash.jpg?anchor=center&mode=crop&width=992&height=646&format=webp&quality=75&rnd=133680009830000000",
      pageUrl: "https://www.caf.com/es/actualidad/noticias/la-ciencia-latinoamericana-se-une-contra-la-perdida-de-biodiversidad/"
    },
    {
      title: "Revista Internacional de Oxford publica artículo científico de docentes de la Universidad de Caldas" ,
      imageUrl: "https://i0.wp.com/www.ucaldas.edu.co/portal/wp-content/uploads/2024/02/artes.jpg?w=900&ssl=1",
      pageUrl: "https://www.ucaldas.edu.co/portal/revista-internacional-de-oxford-publica-articulo-cientifico-de-docentes-de-la-universidad-de-caldas/"
    },
    {
      title: "La ciencia en viñetas: Acta Colombiana de Psicología apuesta por el cómic para divulgar investigaciones",
      imageUrl: "https://www.ucatolica.edu.co/portal/wp-content/uploads/2025/02/Portada-de-revista-de-Psicologia-ACTA-2.jpg",
      pageUrl: "https://www.ucatolica.edu.co/portal/la-ciencia-en-vinetas-acta-colombiana-de-psicologia-apuesta-por-el-comic-para-divulgar-investigaciones/"
    }
  ];


export default function app() {
  return (
    <View style={styles.container}>
        <Header title='Artículos Cientificos'></Header>   
        <ScrollView>
       
       <Text style={styles.text}>
        Infografias de Ciencia y Tecnologia
        </Text>
        

      <View style={styles.containerCard}>
        
        {news.map((news, index) => {
  return (
    <Card
      key={index}
      title={news.title}
      imageUrl={news.imageUrl}
      pageUrl={news.pageUrl}
    />
  );
})}

        </View>

        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        
        

    },

    containerCard:{
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },

  
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#4166d5',
    marginBottom: 10
  }
});
