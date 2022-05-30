import React, { useEffect, useState } from 'react'
//  import {Card} from 'react-native-paper';
import {  FlatList, ScrollView, Divider, Image ,Dimensions} from 'react-native';
import { services } from '../services/service';
import { View, Text, StyleSheet } from 'react-native';


export default function All() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
      services('business')
          .then(data => {
              setNewsData(data)
          })
          .catch(error => {
              alert(error)
          })
}, [])
    return (
       
            

         <ScrollView height={850}>
                   
                <FlatList
               
                    data={newsData}
                    renderItem={({ item }) => (
                       <View>
                     
                  
                            <View style={styles.newsContainer}>
                           
                            <Image
                                    width={50}
                                    height={50}
                                     resizeMode={"cover"}
                                    source={{
                                        uri: item.urlToImage,
                                        
                                    }}
                                    
                                    alt="Alternate Text"
                                />
                               
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.date}>
                                    {item.publishedAt}
                                </Text>
                                <Text style={styles.newsDescription}>
                                    {item.description}
                                </Text>
                               
                            </View>
                            
                       </View> 
                    )}
                    keyExtractor={(item) => item.id}
                   
             />
            
             </ScrollView>
             
           
        )
        
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    newsContainer: {
        padding: 10,
        borderWidth:0.75,
        margin:'1%',
     
    },
    title: {
        fontSize: 25,
        marginTop: 10,
        fontWeight: "600",
        alignItems:'center'
    },
    newsDescription: {
        fontSize: 18,
        marginTop: 10
    },
    date: {
        fontSize: 14
    },
    
});