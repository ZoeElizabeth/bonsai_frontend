import React from 'react';
import { SectionList, Image, StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { Constants } from 'expo';
import image from '../tree_img/export.js';

export default class UserView extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        actionSource: [],
    }
    // this.props.fetchActions
  }

  componentDidMount(){
    this.fetchActions()

  }
  fetchActions = () => {
  
    return fetch('http://localhost:8080/user/1/actions')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        actionSource: responseJson,
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  dailyListActions(dayli_list_id, actions) {
    //grabbing daily list id  from action and comparing to a lists id
    return actions.filter(action => action.dayli_list_id === dayli_list_id);
  }
  
  greenPoints = () => this.state.actionSource.filter(action => !action.redFlag).length;
  redPoints = () => this.state.actionSource.filter(action => action.redFlag).length;

  render() {
    // console.log(this.props.fetchActions())

    return (
     



    <View style={styles.container}>

      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={styles.secondBorder}>
        <Image style={styles.kanye} source={image.kanye} />
        </View>
        <Text style={styles.points} > {this.greenPoints()} {"\n"} Healthy Points </Text>
      
      </View>


      <View style={styles.layout}>
        <Text style={styles.kanyText}> Lil Kanye </Text>
      </View>
      <View/>
      <View style={styles.line}>
        <Text style={styles.padding}> Change Password </Text>
        <Text style={styles.padding}> Change Email </Text>
        <Text style={styles.padding}> Logout </Text>
      </View>

    </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  font: {
    fontSize: 35,
    color: 'white',
    backgroundColor: '#70B879',
  },
  kanye: {
    // flex: 1,
    // flexDirection: 'row',
    height: 150,
    width: 150,
    borderRadius: 150/2,
    borderWidth: 10,
    borderColor: '#AAD9A5',
  },
  layout: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: 70,
    paddingTop: 200,
  },
  kanyText: {
    fontSize: 35,
    color: '#538B9C',
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
  },
  padding: {
    paddingTop: 10,
    // borderWidth: 2,
    // borderRadius: 2,
    // borderColor: '#70B879',
  },
  points: {
    fontWeight: '500',
    paddingTop: 40,
    fontSize: 20,
    paddingLeft: 40,
    color: '#538B9C',
  },
  line: {
    width: 300,
    paddingLeft: 70,
    borderTopColor: '#000',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  secondBorder: {
    borderColor: "#70B879",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 175,
    height: 175,
    borderRadius: 175/2,
    backgroundColor: '#70B879',
  }
});