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
        actionSource: [],
    }
    this.greenPoints = () => this.props.fetchActions.filter(action => !action.redFlag).length;
    this.redPoints = () => this.props.fetchActions.filter(action => action.redFlag).length;
  
  }

  dailyListActions(dayli_list_id, actions) {
    //grabbing daily list id  from action and comparing to a lists id
    return actions.filter(action => action.dayli_list_id === dayli_list_id);
  }
  


  render() {



    return (
      <View style={styles.container}>
      
        {this.state.showModal ? 

        <View style={styles.containerPop}>
      <View style={styles.row}>
      <Item style={{paddingRight: 15, borderBottomColor: "#fff"}}>
      <Image
              style={{width: 40, height: 40}} 
              source={emoji.excited} />
              </Item>
        <Text style={{color:"#538B9C", fontWeight: 'bold'}}>Moving Up! and Moving on. </Text>
        <View/>
        </View>
        <Text style={{color:'#70B879', fontSize: 25, fontWeight: 'bold'}}> {this.greenPoints()} Healthy Actions </Text>
        <Text style={{color:'#FFA0A0', fontSize: 25,}}>{this.redPoints()} Unhealthy Actions</Text>

   
   <View style={styles.row}>
            <TouchableOpacity
              style={styles.buttonsmall}
              onPress={() => {
                this.setState({showModal: !this.state.showModal, });
                }}>
                <Text style={styles.buttonFont}>
                Good Night!
                </Text>
            </TouchableOpacity >
            <TouchableOpacity
              style={styles.buttonsmall}
              onPress={() => {
                this.setState({showModal: !this.state.showModal, });
                }}>
                <Text style={styles.buttonFont}>
                Close
                </Text>
            </TouchableOpacity >
            </View>
          </View>
   
   
        : <TouchableOpacity style={styles.button}
        onPress={() => {
         this.setState({showModal: !this.state.showModal});
         }}>
         <Text style={{   
            fontWeight: 'bold',
            fontSize: 25,
            color: '#fff',}}>
            I'm Done For The Day
          </Text>
         </TouchableOpacity >}

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    padding: 6,
    margin: 20,
    marginTop: 10,
    // width: 130,
    padding: 15,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#AAD9A5',
    borderRadius: 10,
  },
  buttonsmall: {
    padding: 6,
    margin: 20,
    marginTop: 10,
    width: 130,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#AAD9A5',
    borderRadius: 10,
  },
  buttonFont: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  containerPop: {
    textAlign: 'center',
    alignItems: 'center',
    // paddingLeft: 20,
    backgroundColor: '#ffffff',
    },
    row: {
      flexDirection: 'row',
      paddingBottom: 10,  
      paddingTop: 10,
      alignItems: 'center',
  },


});