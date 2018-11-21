import React, {Component} from 'react';
import {FlatList, Modal, TouchableHighlight, TouchableOpacity, View, Alert, StyleSheet, Button} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Text, Form, Item, Input, Picker, CheckBox} from 'native-base';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
        action: '',
        description: '', 
        redFlag: true,
        color_category: '',
        modalVisible: false,
        checked: false,
        checked2: false,
        checked3: false,
        checked4: false,

    }
}

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleSubmit = () => {
    const action = this.state.action;
    const description = this.state.description;
    const redFlag = this.state.redFlag
     // use that ref to get the form value
    console.log('value: ', action, description, redFlag);

    fetch('http://localhost:8080/dayli_list/1/actions', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      action_title: action,
      description: description,
      redFlag: redFlag,
      color_category: "blue",
    }),
  })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          }}>

        <Content style={styles.containerPop}>
          <Form>
            <Item>
              <Input placeholder="Action"  onChangeText={(inputVal) => this.setState({action: inputVal})}
                value={this.state.action}  />
            </Item>

            <View style={styles.onCategoryClick}>
            <Icon name="md-happy"  onPress={() => {
                  this.setState({redFlag: false});
                }}
                ></Icon>
            <Icon name="md-sad" onPress={() => { 
                  this.setState({redFlag: true});

                }}
               ></Icon>
               </View>

          <View style={styles.onCategoryClick}>
            <CheckBox checked={this.state.checked} onPress={() => { 
                  this.setState({color_category: 'blue', checked: !this.state.checked});
                }} color="#03A9F4"/>
            <CheckBox checked={this.state.checked2} onPress={() => { 
                  this.setState({color_category: 'purple', checked2: !this.state.checked2});
                }}color="#673AB7"/>
            <CheckBox  checked={this.state.checked3} onPress={() => { 
                  this.setState({color_category: 'yellow', checked3: !this.state.checked3});
                }} color="#FCCB00"/>
            <CheckBox checked={this.state.checked4} onPress={() => { 
                  this.setState({color_category: 'orange', checked4: !this.state.checked4});
                }} color="#FF9800"/>
                </View>

            <Item last>
              <Input placeholder="Description"  onChangeText={(inputVal) => this.setState({description: inputVal})}
                value={this.state.description} 
               />
            </Item>
  
          </Form>


            <TouchableOpacity  onPress={this.handleSubmit}> 
            <Text style={styles.button}>
               Confirm
             </Text>
            </TouchableOpacity >

                <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
            <Text style={styles.button}>
               Close
             </Text>
            </TouchableOpacity >


    
          
        </Content>
   


  
        </Modal>
        <TouchableOpacity
           onPress={() => {
            this.setModalVisible(true);
          }}>
            <Text style={styles.button}>
               Add Item
             </Text>
            </TouchableOpacity >

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  paddingTop: 40,
  backgroundColor: '#fff',
  },

  containerPop: {
    marginTop: 50,
    padding: 20,
    paddingTop: 220,
    backgroundColor: '#ffffff',
    },

  button: {
    // height: 30,
    width: 130,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#AAD9A5',
  },
  onCategoryClick: {
      flexDirection: 'row',
  }
  });