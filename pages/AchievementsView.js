import React from 'react';
import { SectionList, Image, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { Constants } from 'expo';
import Achieved from '../modal/Achieved';
import stickers from '../stickers/sticker.js';
import { Content, Form, Item, Input, Icon} from 'native-base';


export default class AchievmentsView extends React.Component {

  render() {
    return ( 
      <View>
        <Achieved />
        <TouchableHighlight
          style={styles.background}>
          <Text style={styles.title}>Achievements</Text>
        </TouchableHighlight>

          <View style={styles.row}>
            <Item style={styles.item} >
            <Image
                  style={styles.images} 
                  source={stickers.balloons} />
            </Item>
             <Item style={styles.item} >
            <Image
            style={styles.images} 
                  source={stickers.ducky} />
            </Item>
            <Item style={styles.item} >
            <Image
            style={styles.images} 
                  source={stickers.heavymetal} />
                              </Item>
            <Item style={styles.item} >
            <Image
            style={styles.images} 
                  source={stickers.medal} />
                          </Item>
     
              </View> 


                 <View style={styles.row}>
                 <Item style={styles.item} >
         
            <Image
                  style={styles.images} 
                  source={stickers.mirrorball} />
               </Item>
            
          </View>
     
 
        <TouchableHighlight
          style={styles.background}>
          <Text style={styles.title}>Stickers</Text>
         
        </TouchableHighlight>
        <View style={styles.row}>


                   
            <Item style={styles.item} >
          <Image
                     style={styles.images} 
                source={stickers.raccoon} />
                                   </Item>
            <Item style={styles.item} >
          <Image
                       style={styles.images} 
                source={stickers.owl} />
                                   </Item>
            <Item style={styles.item} >
          <Image
                    style={styles.images} 
                source={stickers.mushroom} />
                                   </Item>
            <Item style={styles.item} >
          <Image
               style={styles.images} 
                source={stickers.squirrel} />
                                   </Item>
           
        </View>
      </View>
    );

  }
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
    color: '#70B879',

      

  },    
  background: {
    margin: 15,
    padding: 5,
    borderRadius: 100,


  },
  row: {
    flexDirection: 'row',
    paddingBottom: 10,  
    paddingTop: 1,
    alignItems: 'center',
    padding: 25,
},

images: {
  padding: 25,
  width: 60, 
  overflow: 'visible',
  height: 60
},
item: {
  padding: 10,
  borderBottomColor: '#fff',
  overflow: 'visible'

}

});
