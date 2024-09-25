import React from 'react';
import { Text, View, Image,   FlatList} from 'react-native';
import styles from './styles';


const BannerSliderWithLabel = ({ items, ID, header, Title }) => {
   

    const renderGridItem = ({ item }) => (
 
        <View style={styles.Container} >
            <Image
             
                source={{ uri: item.url }}
                style={[
                    styles.first, 
                    ID=== 4 ? styles.second : null
                ]}
            />
        </View>
    );

    return (
      

        <View style={styles.main}>
            <View style={styles.heading}>
                  {header ? <Text style={styles.head}>{header.title}</Text> 
              : <Text style={styles.title}>{Title}</Text> }
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
                data={items}
                renderItem={renderGridItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
            />
        </View>
    );
};


export default BannerSliderWithLabel;

