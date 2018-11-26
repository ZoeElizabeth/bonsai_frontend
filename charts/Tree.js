import React from 'react';
import { SectionList, Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Constants } from 'expo';
import image from '../tree_img/export.js';

class GrowingTree extends React.Component {
  constructor(props){
    super(props);
    this.state ={ 
      greenPoints: 280,
    }
    this.greenPoints = () => this.props.actionSource.filter(action => !action.redFlag).length;
  }

    caseSwitch = () => {
      if(this.state.greenPoints <= 10){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_1}/>
      } if(this.state.greenPoints > 10 && this.state.greenPoints <= 20){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_2}/>
      } if(this.state.greenPoints > 20 && this.state.greenPoints <= 30){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_3}/>
      } if(this.state.greenPoints > 30 && this.state.greenPoints <= 40){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_4}/>
      } if(this.state.greenPoints > 40 && this.state.greenPoints <= 50){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_5}/>
      } if(this.state.greenPoints > 50 && this.state.greenPoints <= 60){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_6}/>
      } if(this.state.greenPoints > 60 && this.state.greenPoints <= 70){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_7}/>
      } if(this.state.greenPoints > 70 && this.state.greenPoints <= 80){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_8}/>
      } if(this.state.greenPoints > 80 && this.state.greenPoints <= 90){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_9}/>
      } if(this.state.greenPoints > 90 && this.state.greenPoints <= 100){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_10}/>
      } if(this.state.greenPoints > 100 && this.state.greenPoints <= 110){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_11}/>
      } if(this.state.greenPoints > 110 && this.state.greenPoints <= 120){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_12}/>
      } if(this.state.greenPoints > 120 && this.state.greenPoints <= 130){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_13}/>
      } if(this.state.greenPoints > 130 && this.state.greenPoints <= 140){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_14}/>
      } if(this.state.greenPoints > 140 && this.state.greenPoints <= 150){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_15}/>
      } if(this.state.greenPoints > 150 && this.state.greenPoints <= 160){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_16}/>
      } if(this.state.greenPoints > 160 && this.state.greenPoints <= 170){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_17}/>
      } if(this.state.greenPoints > 170 && this.state.greenPoints <= 180){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_18}/>
      } if(this.state.greenPoints > 180 && this.state.greenPoints <= 190){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_19}/>
      } if(this.state.greenPoints > 190 && this.state.greenPoints <= 200){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_20}/>
      } if(this.state.greenPoints > 200 && this.state.greenPoints <= 210){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_21}/>
      } if(this.state.greenPoints > 210 && this.state.greenPoints <= 220){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_22}/>
      } if(this.state.greenPoints > 220 && this.state.greenPoints <= 230){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_23}/>
      } if(this.state.greenPoints > 230 && this.state.greenPoints <= 240){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_24}/>
      } if(this.state.greenPoints > 240 && this.state.greenPoints <= 250){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_25}/>
      } if(this.state.greenPoints > 250 && this.state.greenPoints <= 260){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_26}/>
      } if(this.state.greenPoints > 260 && this.state.greenPoints <= 270){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_27}/>
      } if(this.state.greenPoints > 270 && this.state.greenPoints <= 280){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_28}/>
      } if(this.state.greenPoints > 280 && this.state.greenPoints <= 290){
        return <ImageBackground style={styles.tree_imgs} source={image.tree_29}/>
      } else {
        return <ImageBackground style={styles.tree_imgs} source={image.tree_30}/>
      } 
        // switch(this.state.greenPoints){
        //   case greenPoints  <= 10:
        //     <ImageBackground style={styles.tree_imgs} source={image.tree_1} />
        //     break;
        //   case greenPoints  <= 20:
        //     <ImageBackground style={styles.tree_imgs} source={image.tree_2} />
        //     break;
        // }
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
    width: '102%',
  },
});

export default GrowingTree;




