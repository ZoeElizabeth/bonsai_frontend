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
        showModal: false,

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
            labelColor: '#ffffff',
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
    this.props.fetching();
    });
    this.setState({ showModal: false, });

}


  render() {

    onPressRadio = data => {
      let selected = data.filter(data => data.selected)[0]
      console.log(selected)

      this.setState({ data, color_category: selected.color });
    }

    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : '';

    return (
      <View style={styles.container}>
      
        {this.state.showModal ? 
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
                    color="green"
                    this.setState({redFlag: true});
              }}/>
            </View>

            <View style={styles.row2}>
              <RadioGroup
                style={styles.radio}
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
                this.setState({showModal: !this.state.showModal})
                }}>
                <Text style={styles.buttonFont}>
                Close
                </Text>
            </TouchableOpacity >
          </View>
        </Content>
   
                

  

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

  containerPop: {
    bottom: 0,
    // padding: 20,
    paddingTop: 0,
    backgroundColor: '#ffffff',
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
  row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  row2: {
    paddingBottom: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#fff',
},

  padder: {
   marginBottom: 30,

  },
  radio: {
    color: "#fff",

  }
});