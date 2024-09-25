import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput,ScrollView } from 'react-native';

import women from '../women.json';
import BannerSliderWithLabel from './bannerSliderWithLabel';
import Banner from './banner';
import Grid from './grid';
import styles from './styles';
import Footer from './footer';
import cart from '../assets/cart.png';
import search from '../assets/search.png';
import head from '../assets/image.png';

class Main extends React.Component {
  header = [
    { id: 1, title: "WOMEN" },
    { id: 2, title: "MEN" },
    { id: 3, title: "KIDS" },
    { id: 4, title: "PREMIUM" },
    { id: 5, title: "INFLUENCER" }
  ];

  renderHeader = () => (
    <View style={styles.background}>
      <View style={styles.top}>
        <View></View>
        <TouchableOpacity style={styles.tag}>
          <Image style={styles.imge} source={head} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cart}>
          <Image style={styles.img} source={cart} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Image style={styles.searchIcon} source={search} />
          <TextInput
            style={styles.inputbox}
            placeholder="What are you looking for?"
            placeholderTextColor="#888"
          />
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.section}>
          {this.header.map((item) => (
            <TouchableOpacity key={item.id} style={styles.touchableOption}>
              <View
                style={[
                  styles.option,
                  item.id === 1 ? styles.boldUnderline : null
                ]}
              >
                <Text
                  style={item.id === 1 ? styles.bold : null}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );

  renderListItem = ({ item }) => {
    switch (item.type) {
      case 'grid':
        return <Grid items={item.items} ID={item.index} header={item.header} />;
      case 'banner':
        return <Banner items={item.items} ID={item.index} header={item.header} />;
      case 'bannerSliderWithLabel':
        return <BannerSliderWithLabel items={item.items} ID={item.index} header={item.header} Title={item.title} />;
      default:
        return null;
    }
  }

  render() {
    return (
        <View style={styles.container}>
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={women.data}
        renderItem={this.renderListItem}
        keyExtractor={(item, index) => index.toString()}
        stickyHeaderIndices={[0]} 
        // ListFooterComponent={<Footer />} 
        
      />
      </View>
    );
  }
}

export default Main;
