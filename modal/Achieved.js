import React, {Component} from 'react';
import {Modal, TouchableOpacity, View, Alert, StyleSheet, Image} from 'react-native';
import { Content, Text, Form, Item, Input, Icon} from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import emoji from '../emoji/emoji.js';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
        showModal: false,
    }
  }

  


  render() {



    return (
      <View style={styles.container}>
      
        {this.state.showModal ? 
 
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({showModal: !this.state.showModal,
                action: '',
                description: '' });
                }}>
                <Text style={styles.buttonFont}>
                Close
                </Text>
            </TouchableOpacity >

     
   
        : <TouchableOpacity style={styles.button}
        onPress={() => {
         this.setState({showModal: !this.state.showModal});
         }}>
         <Text style={styles.buttonFont}>
            Add Item
          </Text>
         </TouchableOpacity >}

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
  },

});