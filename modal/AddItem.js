import React, {Component} from 'react';
import {Modal, TouchableOpacity, View, Alert, StyleSheet} from 'react-native';

import { Content, Text, Form, Item, Input, Icon} from 'native-base';

import RadioGroup from 'react-native-radio-buttons-group';

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

        data: [
          {
            label: '1',
            color: 'blue',
            action: () => { this.setState({color_category: 'blue'})}
          }, 
          {
            label: '2',
            color: 'purple',
            action: () => {this.setState({color_category: 'purple'})}         
          },
          {
            label: '3',
            color: 'yellow',
            action: () => {this.setState({color_category: 'yellow'})}
          }, 
          {
            label: '4',
            color: 'orange',
            action: () => {this.setState({color_category: 'orange'}) }       
          }
      ],



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

    onPressRadio = data => {
      let selected = data.filter(data => data.selected)[0]
      console.log(selected)

      this.setState({ data, color_category: selected.color });
    }

    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;

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

         
              <Icon name="md-happy" onPress={() => {
                 this.setState({redFlag: false});
              }}/>
              <Icon name="md-sad" onPress={() => { 
                    this.setState({redFlag: true});
              }}/>
            </View>

            <View style={styles.row2}>
              <RadioGroup
                labelColor='#50C900'
                flexDirection='row'
                radioButtons={this.state.data}
                onPress={onPressRadio} />

            </View>

            <Item style={styles.padder}>
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
    padding: 10,
    width: 130,
    lineHeight: 15,
    fontSize: 60,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#AAD9A5',
    borderRadius: 10,
  },
  row: {
  
      flexDirection: 'row',
      alignItems: 'center',
  },
  row2: {
    paddingBottom: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
},

  padder: {
   marginBottom: 30,

  }
});