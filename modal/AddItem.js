import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import tcomb from 'tcomb-form-native';
const Form = tcomb.form.Form

const Action = tcomb.struct({ 
 action_title: tcomb.String, 
 description: tcomb.String, 
 redFlag: tcomb.Boolean, 
 color_category: tcomb.String, 
})

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
          <View>
            <View style={styles.containerPop}>
              <Text>Changes Yay!</Text>
              <Form type={Action} />

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Confirm</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Add Item</Text>
        </TouchableHighlight>
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
    width: '100%',
    alignItems: 'center',
    paddingTop: 120,
    },
  });