import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import eCommerce from '../assets/e-commerce.png'
import home from '../assets/home.png';
import category from '../assets/category.png';
import account from '../assets/acc.png'
class Footer extends Component {
    constructor() {
        super();
        this.state = {};
    }
    footer=[
        {id:1, title:"WOMEN"},
        {id:2, title:"MEN"},
        {id:3, title:"KIDS"},
        {id:4, title:"PREMIUM"},
        {id:5, title:"INFLUENCER"}
      ]

    render() {

        return (
            <View  style= {styles.footerContainer}>
                <View style={styles.mainBody }>
            <TouchableOpacity><Image style={styles.footerImage}source={home}/></TouchableOpacity>
            <Text style={styles.footertext }>Home</Text>
            </View>
            <View style={styles.mainBody }>
            <TouchableOpacity><Image style={styles.footerImage}source={category}/></TouchableOpacity>
            <Text style={styles.footertext}>Categories</Text>
            </View>
            <View style={styles.mainBody }>
             <TouchableOpacity><Image style={styles.footerImage}source={eCommerce}/></TouchableOpacity>
             <Text style={styles.footertext}>ClassReady</Text>
             </View>
             <View style={styles.mainBody }>
             <TouchableOpacity><Image style={styles.footerImage}source={eCommerce}/></TouchableOpacity>
             <Text style={styles.footertext}>WishList</Text>
             </View>
             <View style={styles.mainBody }>
             <TouchableOpacity><Image style={styles.footerImage}source={account}/></TouchableOpacity>
             <Text style={styles.footertext}>Account</Text>
             </View>



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
            </View>

        );
    }
}


export default Footer;
