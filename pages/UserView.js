import React from 'react';
import { SectionList, Image, StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { Constants } from 'expo';
import image from '../tree_img/export.js';

export default class UserView extends React.Component {
  render() {

    return (
     



    <View style={styles.container}>
      <Text style={styles.font} >
        Bonsai
      </Text>
      <View/>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image style={styles.kanye} source={image.kanye} />
        <Text style={styles.points} > Health Points </Text>
      </View>

      <View style={styles.layout}>
        <Text style={styles.kanyText}> Lil Kanye </Text>
      </View>
      <View/>
      <View style={styles.line}>
        <Text style={styles.padding}> Change Password </Text>
        <Text style={styles.padding}> Change Email </Text>
        <Text style={styles.padding}> Logout </Text>
      </View>

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
    // flex: 1,
    // flexDirection: 'row',
    height: 200,
    width: 200,
    borderRadius: 200/2,
    borderWidth: 10,
    borderColor: 'green',
  },
  layout: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: 70,
    paddingTop: 250,
  },
  kanyText: {
    fontSize: 35,
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
  },
  padding: {
    paddingTop: 10,
    // borderWidth: 2,
    // borderRadius: 2,
    // borderColor: '#70B879',
  },
  points: {
    paddingTop: 40,
    fontSize: 20,
    paddingLeft: 40,
  },
  line: {
    width: 300,
    paddingLeft: 70,
    borderTopColor: '#ccffff',
    borderTopWidth: 1,
  }
});