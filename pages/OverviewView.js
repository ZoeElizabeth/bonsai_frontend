import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Constants, Svg, EllipseProps } from 'expo';
import PropTypes from 'prop-types';
import PieChart from '../charts/PieChart';
import GraphChart from '../charts/Graph';

export default class OverviewView extends React.Component {

    render() {

       


        return (
            <View>
            <PieChart/>
            <GraphChart/>
            </View>
        )
    }
}