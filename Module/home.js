import React from 'react';
import Women from './components/main';
import styles from './components/styles';
import {View } from 'react-native'

function Main() {
  return (
    <View style={styles.app}>
      <Women />
    </View>
  );
}

export default Main;