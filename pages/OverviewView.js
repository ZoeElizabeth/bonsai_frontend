import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
                <Text style={styles.title}>Daily Activity Overview</Text>
                <PieChart/>
                <Text style={styles.title}>All Time Overview</Text>
                <GraphChart/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        borderRadius: 100,
        fontSize: 30,
        fontWeight: 'bold',
        padding: 15,
        backgroundColor: '#AAD9A5',
        color:'#fff',
        margin: 15,
        

    },

});
