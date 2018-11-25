import React, {Component} from 'react';
import {Modal, TouchableHighlight, View, Alert, StyleSheet, ImageBackground, Image} from 'react-native';
import { Content, Text, Form, Item, Input, Icon} from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import bg from '../emoji/emoji.js';

export default class Splash extends Component {
  state = {
    modalVisible: true,
    username: '',
    password:'',
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
     
        <Modal
        
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          }}>
          <ImageBackground style={{width: '100%', height: '100%'}} source={bg.bg}>
            <View style={styles.title}>
          
              <Text>Welcome to Bonsai</Text>
            </View>
              
            <View style={styles.form}>
            
              <Form>
                <Item style={styles.item}>
                  <Input placeholder="Username" 
                    onChangeText={(inputVal) => this.setState({username: inputVal})}
                    value={this.state.username}/>
                </Item>
              
                <Item style={styles.item}>
                  <Input placeholder="Password" 
                    secureTextEntry={true}
                    onChangeText={(inputVal) => this.setState({password: inputVal})}
                    value={this.state.password}/>
                </Item>
        
              </Form>
              
              <View style={styles.container}>

                <TouchableHighlight
                  style={styles.button}
                  onPress={() => {
                    this.setModalVisible(false);
                  }}>

                  <Text style={{color: '#538B9C'}}>Login</Text>

                </TouchableHighlight>

                <TouchableHighlight
                  style={styles.button}
                  onPress={() => {
                    this.setModalVisible(false);
                  }}>
                  <Text style={{color: '#538B9C'}}>Register</Text>

                </TouchableHighlight>
              </View>
            </View>
          </ImageBackground>
                
            
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 35,
  },
  title: {
    // flex: 1,

    textAlign: 'center',
    alignItems: 'center',
    marginTop: 100,
  
    fontSize: 35,
  },
  button: {
    padding: 3,
    marginLeft: 20,
    alignItems: 'center',
    marginTop: 25,
    width: 80 ,
    backgroundColor: '#AAD9A5',
    borderRadius: 10,
  },

  form:{
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginTop: 100,
    marginRight: 60,
    marginLeft: 60,
    paddingTop: 10,
    padding: 25,
    borderRadius: 10,
  },
  item:{
    paddingTop: 20,
  }
});
