import React from 'react';
import { SectionList, Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Constants } from 'expo';
import image from '../tree_img/export.js';

export default class UserView extends React.Component {
  render() {

    return (
     



    <View style={styles.container}>
      <Text style={styles.font} >
        Bonsai
      </Text>
      <Image style={styles.kanye} source={image.kanye} />
      <View/>
      <Text></Text>
    </View>
    );

  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  font: {
    fontSize: 35,
    color: 'white',
    backgroundColor: '#70B879',
  },
  kanye: {
    height: 200,
    width: 200,
    borderRadius: 200/2,
    borderWidth: 10,
    borderColor: 'green',
  },
});