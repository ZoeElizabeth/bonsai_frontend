import React from 'react';
import { SectionList, Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Constants } from 'expo';

class GrowingTree extends React.Component {
    caseSwitch = () => {
        switch(this.state.greenPoints){
          case greenPoints  <= 10:
            <ImageBackground style={styles.tree_imgs} source={image.tree_1} />
            break;
          case greenPoints  <= 20:
            <ImageBackground style={styles.tree_imgs} source={image.tree_2} />
            break;
        }
    }
    
    render() {
    return ( 
      <View>
        <Text>
            Hello 
            {/* <ImageBackground></ImageBackground> */}
        </Text>
      </View>
    );

  }
};

const styles = StyleSheet.create({

});

export default GrowingTree;




