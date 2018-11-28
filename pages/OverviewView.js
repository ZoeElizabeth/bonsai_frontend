import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  Fetch, 
  FlatList,
  ImageBackground,

} from 'react-native';
import { Constants, Svg, EllipseProps } from 'expo';
import PropTypes from 'prop-types';
import PieChart from '../charts/PieChart';
import GraphChart from '../charts/Graph';

export default class OverviewView extends React.Component {

    render() {

       


        return (
            <View>
               
          
               <TouchableHighlight
                  style={styles.background}
                >

              <Text style={styles.title}>Daily Activity Overview</Text>

                </TouchableHighlight>

            

                <PieChart fetchActions={this.props.fetchActions}/>
                <TouchableHighlight
                  style={styles.background}
                >

                <Text style={styles.title}>All Time Overview</Text>
                </TouchableHighlight>
                <GraphChart fetchActions={this.props.fetchActions}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: 'bold',
      
    
      color:'#fff',

        

    },    
    background: {
      margin: 15,
      padding: 5,
      borderRadius: 100,
      backgroundColor: '#AAD9A5',

    },


});
