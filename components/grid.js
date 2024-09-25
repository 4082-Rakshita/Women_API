import React from 'react';
import { View, Text, Image, FlatList} from 'react-native';
import styles from './styles';


const Grid = ({items, ID,header}) => {

    const renderGridItem = ( {item} ) => {
        if(ID==2){
        return ( 
             <View style={styles.gridItem}>
                <Image
                    source={{ uri: item.url }}
                    style={styles.gridImage}
                    resizeMode='center'
                />
            </View>
        );
       
    }

    else if( ID==3){
        return (
             <View style={styles.gridItem}>
                <Image
                    source={{ uri: item.url }}
                    style={styles.gridImage2}
                    resizeMode='center'
                />
            </View>
          
    
        );
    }

    else if(ID==6){
        return (
            <View style={styles.gridItem}>
                <Image
                    source={{ uri: item.url }}
                    style={styles.gridImage3}
                />
            </View>
        );
    }
    };
 
    return (
    
        <View style={styles.main}>
            <View style={styles.heading}>
            {header?<Text style={styles.head}>{header.title}</Text>:null}
            </View>
       
        <FlatList
            data={items}
            renderItem={renderGridItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={ID==6 ? 2 :3}
            contentContainerStyle={styles.gridContainer}

        />
         </View>
    );
};


 
export default Grid;
