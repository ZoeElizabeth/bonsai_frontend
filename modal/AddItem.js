import React, {Component} from 'react';
import {Modal, TouchableOpacity, View, Alert, StyleSheet, Image} from 'react-native';
import { Content, Text, Form, Item, Input, Icon} from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import emoji from '../emoji/emoji.js';

export default class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
        action: '',
        description: '', 
        redFlag: null,
        color_category: '',           
        modalVisible: false,
        showModal: false,
        colorBG: '#fff',
        colorBG2: '#fff',
        inputVal: '',
    

        data: [
          {
            label: '0',
            color: '#ffffff',
            action: ''
          }, 
          {
            label: '1',
            color: '#4FBCFC',
            action:'#4FBCFC'
          }, 
          {
            label: '2',
            color: '#9A60F7',
            action: '#9A60F7'        
          },
          {
            label: '3',
            color: '#FCDF15',
            action: '#FCDF15'
          }, 
          {
            label: '4',
            color: '#FCB54D',
            labelColor: '#ffffff',
            action:'#FCB54D'       
          }
      ],
    }
}

  


  handleSubmit = () => {
    const action = this.state.action;
    const description = this.state.description;
    const redFlag = this.state.redFlag
    const color_category = this.state.color_category;


    return fetch('http://localhost:8080/dayli_list/1/actions', {
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
    .then(() => {

    this.props.refreshActions(1, this.props.fetchActions);

    });
    this.setState({ showModal: false,
    action: '',
    description: '',
    colorBG: '#fff',
    colorBG2: '#fff',
   });
}


  render() {

    onPressRadio = data => {
      let selected = data.filter(data => data.selected)[0]
      this.setState({data, color_category: selected.action});
    }

    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : '';

    return (
      <View style={styles.container}>
      
        {this.state.showModal ? 
        <View style={styles.containerPop}>
          <Form>
            <Item>
              <Input placeholder="Action" 
                multiline={true}
                onChangeText={(inputVal) => this.setState({action: inputVal})}
                value={this.state.action}/>
            </Item>

            <View style={styles.row}>

             <TouchableOpacity 
                style={{
                margin: 5,
                marginLeft: 15,
                marginBottom:0,
                padding: 5, 
                borderRadius: 50,
                backgroundColor: this.state.colorBG}}
              onPress={() => {
               
                 this.setState({
                  colorBG: '#70B879',
                  colorBG2: '#fff',
                  redFlag: false});
        
              }} > 
              <Image
               style={{width: 30, height: 30}} 
              source={emoji.happy} />
              </TouchableOpacity >

             <TouchableOpacity 
            
               style={{
                marginBottom:0,
                margin: 5,
                padding: 5, 
                borderRadius: 50,
                backgroundColor: this.state.colorBG2}}
              onPress={() => {
       
                 this.setState({
                  colorBG2: '#FFA0A0',
                  colorBG: '#fff',
                  redFlag: true});
              
              }}> 

              <Image
              style={{width: 30, height: 30}} 
              source={emoji.dull} />
              </TouchableOpacity >
              </View>

    
            <View style={styles.row2}>
              <RadioGroup
                labelColor="#fff"
                flexDirection='row-reverse'
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
                this.setState({showModal: !this.state.showModal,
                action: '',
                description: '' });
                }}>
                <Text style={styles.buttonFont}>
                Close
                </Text>
            </TouchableOpacity >
          </View>
        </View>
   
        : <TouchableOpacity style={styles.additem}
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
    margin: 0
  },

  containerPop: {
    paddingTop: 0,
    backgroundColor: '#ffffff',
    margin: 0
    },

  buttonFont: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },

  button: {
    padding: 6,
    margin: 20,
    marginTop: 10,
    width: 130,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#AAD9A5',
    borderRadius: 10,
  },
  additem: {
    padding: 6,
    margin: 20,
    // marginLeft: 20,
    width: 130,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#AAD9A5',
    borderRadius: 10,
  },
  row: {
      flexDirection: 'row',
      paddingBottom: 10,  
      paddingTop: 10,
      alignItems: 'center',
  },
  row2: {
    marginLeft: 10,

    flexDirection: 'row',
    color: '#fff',
},

  padder: {
   marginBottom: 30,

  },
});