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


    }
}

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }



  handleSubmit = () => {
    const action = this.state.action;
    const description = this.state.description;
    const redFlag = this.state.redFlag
    const color_category = this.state.color_category;
    console.log('value: ', action, description, redFlag, color_category);

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
      color_category: color_category,
    }),
  })
  }


  confirmPost = () => {
    this.handleSubmit()
    this.setModalVisible(!this.state.modalVisible)
  }


  render() {

    const buttons = [
      {
        text: 'blue',
        action: () => { this.setState({color_category: 'blue', checked: !this.state.checked})}
      }, 
      {
        text: 'purple',
        action: () => {this.setState({color_category: 'purple', checked: !this.state.checked})}         
      },
      {
        text: 'yellow',
        action: () => {this.setState({color_category: 'yellow', checked: !this.state.checked})}
      }, 
      {
        text: 'orange',
        action: () => {this.setState({color_category: 'orange', checked: !this.state.checked}) }       
      }
  ];


    const catButtons =  buttons.map(b => {
      return <CheckBox checked={this.state.checked} key={b.text} color={b.text} text={b.text} onPress={b.action} />;
    });

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          Alert.alert('Modal has been closed.');}}>

        <Content style={styles.containerPop}>
          <Form>
            <Item>
              <Input placeholder="Action" 
               multiline={true}
                onChangeText={(inputVal) => this.setState({action: inputVal})}
                value={this.state.action}/>
            </Item>

            <View style={styles.row}>

        

            <Icon name="md-happy"  onPress={() => {


                  this.setState({redFlag: false});
                }}
                ></Icon>
            <Icon name="md-sad" onPress={() => { 
                  this.setState({redFlag: true});

                }}
            ></Icon>

              {catButtons}

            </View>

          {/* <View style={styles.row}> */}
            {/* <CheckBox checked={this.state.checked} onPress={() => { 
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
                }} color="#FF9800"/> */}
                {/* </View> */}

            <Item>
            <Input 
              placeholder="Description"  
              multiline={true}
              onChangeText={(inputVal) => this.setState({description: inputVal})}
              value={this.state.description} 
               />
            </Item>
  
          </Form>

          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.confirmPost} > 
                <Text style={styles.buttonFont}>
                Confirm
                </Text>
            </TouchableOpacity >

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
              this.setModalVisible(!this.state.modalVisible);}}>
                <Text style={styles.buttonFont}>
                Close
                </Text>
            </TouchableOpacity >
          </View>
        </Content>
   


  
        </Modal>
        <TouchableOpacity style={styles.button}
           onPress={() => {
            this.setModalVisible(true);
          }}>
            <Text style={styles.buttonFont}>
               Add Item
             </Text>
            </TouchableOpacity >

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
  },

  containerPop: {
    marginTop: 50,
    padding: 20,
    paddingTop: 220,
    backgroundColor: '#ffffff',
    },

  buttonFont: {
    color: '#fff',
  },

  button: {
    // height: 30,
    width: 130,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#AAD9A5',
    borderRadius: 10,
  },
  row: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
  },

  background: {
    backgroundColor:"green",

  }
  });