import React from 'react';
import { SectionList, Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Constants } from 'expo';
import image from '../tree_img/export.js';

class GrowingTree extends React.Component {
  constructor(props){
    super(props);
    this.state ={ 

    }
    this.greenPoints = () => this.props.fetchActions.filter(action => !action.redFlag).length;
    this.redPoints = () => this.props.fetchActions.filter(action => action.redFlag).length;
  }

    caseSwitch = () => {
      if(this.greenPoints <= 10){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_1}/>
      } if(this.greenPoints > 10 && this.greenPoints <= 20){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_2}/>
      } if(this.greenPoints > 20 && this.greenPoints <= 30){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_3}/>
      } if(this.greenPoints > 30 && this.greenPoints <= 40){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_4}/>
      } if(this.greenPoints > 40 && this.greenPoints <= 50){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_5}/>
      } if(this.greenPoints > 50 && this.greenPoints <= 60){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_6}/>
      } if(this.greenPoints > 60 && this.greenPoints <= 70){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_7}/>
      } if(this.greenPoints > 70 && this.greenPoints <= 80){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_8}/>
      } if(this.greenPoints > 80 && this.greenPoints <= 90){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_9}/>
      } if(this.greenPoints > 90 && this.greenPoints <= 100){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_10}/>
      } if(this.greenPoints > 100 && this.greenPoints <= 110){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_11}/>
      } if(this.greenPoints > 110 && this.greenPoints <= 120){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_12}/>
      } if(this.greenPoints > 120 && this.greenPoints <= 130){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_13}/>
      } if(this.greenPoints > 130 && this.greenPoints <= 140){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_14}/>
      } if(this.greenPoints > 140 && this.greenPoints <= 150){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_15}/>
      } if(this.greenPoints > 150 && this.greenPoints <= 160){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_16}/>
      } if(this.greenPoints > 160 && this.greenPoints <= 170){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_17}/>
      } if(this.greenPoints > 170 && this.greenPoints <= 180){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_18}/>
      } if(this.greenPoints > 180 && this.greenPoints <= 190){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_19}/>
      } if(this.greenPoints > 190 && this.greenPoints <= 200){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_20}/>
      } if(this.greenPoints > 200 && this.greenPoints <= 210){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_21}/>
      } if(this.greenPoints > 210 && this.greenPoints <= 220){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_22}/>
      } if(this.greenPoints > 220 && this.greenPoints <= 230){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_23}/>
      } if(this.greenPoints > 230 && this.greenPoints <= 240){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_24}/>
      } if(this.greenPoints > 240 && this.greenPoints <= 250){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_25}/>
      } if(this.greenPoints > 250 && this.greenPoints <= 260){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_26}/>
      } if(this.greenPoints > 260 && this.greenPoints <= 270){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_27}/>
      } if(this.greenPoints > 270 && this.greenPoints <= 280){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_28}/>
      } if(this.greenPoints > 280 && this.greenPoints <= 290){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_29}/>
      } if(this.greenPoints > 290 && this.greenPoints <= 300){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_30}/>
      } else {
        return <ImageBackground style={styles.tree_imgs} source={image.stickers}/>
      } 
    }
    
    render() {
    return ( 
      <View>
          <this.caseSwitch/>
      </View>
    );

  }
};

const styles = StyleSheet.create({
  tree_imgs: {
    top: 25,
    flex: 1,
    height: 200,
    paddingRight: 35,
    width: '102%',
  },
});

export default GrowingTree;




