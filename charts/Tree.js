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

      if(this.greenPoints() <= 1){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_1}/>
      } else if(this.greenPoints() > 1 && this.greenPoints() <= 2){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_2}/>
      } else if(this.greenPoints() > 2 && this.greenPoints() <= 3){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_3}/>
      } else if(this.greenPoints() > 3 && this.greenPoints() <= 4){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_4}/>
      } else if(this.greenPoints() > 4 && this.greenPoints() <= 5){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_5}/>
      } else if(this.greenPoints() > 5 && this.greenPoints() <= 6){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_6}/>
      } else if(this.greenPoints() > 6 && this.greenPoints() <= 7){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_7}/>
      } else if(this.greenPoints() > 7 && this.greenPoints() <= 8){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_8}/>
      } else if(this.greenPoints() > 8 && this.greenPoints() <= 9){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_9}/>
      } else if(this.greenPoints() > 9 && this.greenPoints() <= 10){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_10}/>
      } else if(this.greenPoints() > 10 && this.greenPoints() <= 11){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_11}/>
      } else if(this.greenPoints() > 11 && this.greenPoints() <= 12){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_12}/>
      } else if(this.greenPoints() > 12 && this.greenPoints() <= 13){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_13}/>
      } else if(this.greenPoints() > 13 && this.greenPoints() <= 14){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_14}/>
      } else if(this.greenPoints() > 14 && this.greenPoints() <= 15){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_15}/>
      } else if(this.greenPoints() > 15 && this.greenPoints() <= 16){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_16}/>
      } else if(this.greenPoints() > 16 && this.greenPoints() <= 17){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_17}/>
      } else if(this.greenPoints() > 17 && this.greenPoints() <= 18){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_18}/>
      } else if(this.greenPoints() > 18 && this.greenPoints() <= 19){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_19}/>
      } else if(this.greenPoints() > 19 && this.greenPoints() <= 20){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_20}/>
      } else if(this.greenPoints() > 20 && this.greenPoints() <= 21){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_21}/>
      } else if(this.greenPoints() > 21 && this.greenPoints() <= 22){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_22}/>
      } else if(this.greenPoints() > 22 && this.greenPoints() <= 23){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_23}/>
      } else if(this.greenPoints() > 23 && this.greenPoints() <= 24){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_24}/>
      } else if(this.greenPoints() > 24 && this.greenPoints() <= 25){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_25}/>
      } else if(this.greenPoints() > 25 && this.greenPoints() <= 26){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_26}/>
      } else if(this.greenPoints() > 26 && this.greenPoints() <= 27){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_27}/>
      } else if(this.greenPoints() > 27 && this.greenPoints() <= 28){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_28}/>
      } else if(this.greenPoints() > 28 && this.greenPoints() <= 29){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_29}/>
      } else if(this.greenPoints() > 29 && this.greenPoints() <= 30){
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




