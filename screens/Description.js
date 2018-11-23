import React from 'react';
import { SectionList, Image, StyleSheet, Text, View, FlatList } from 'react-native';
import { Constants } from 'expo';

export default class Description extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource: 'here',
    
    }
  }
  
  // user = (user) => {
  //   console.log(user.name)
  // }

 
  render() {

    fetching = () => {
      return fetch('http://localhost:8080/dayli_list/1/actions')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.reverse(),
        });
      })
      .catch((error) =>{
        console.error(error);
      });
    }
    

    return (
      <FlatList
      data={this.state.dataSource}
      renderItem={({item}) => <Text >{item.color_category}</Text>}
      keyExtractor={({id}, index) => id.toString()}
      />
    );

  }
};

const styles = StyleSheet.create({

});