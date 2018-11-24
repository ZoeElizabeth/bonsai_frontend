import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Constants, Svg, EllipseProps } from 'expo';
import { LineChart, Grid } from 'react-native-svg-charts'
import PropTypes from 'prop-types';

export default class GraphChart extends React.Component {

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const data2 = [ 20, 50, 60, 70 , 80 , 90, 20, -30, -70, 35, 72, 47, -29, 15, 20 ]

        return (
            <View style={ { height: 200 } }>
                <LineChart
                    style={ { flex: 1 } }
                    data={ data }
                    svg={{ stroke: 'green' }}
                    contentInset={ { top: 20, bottom: 20 } }>
                    <Grid/>
                </LineChart>
                <LineChart
                    style={ StyleSheet.absoluteFill }
                    data={ data2 }
                    svg={{ stroke: 'red' }}
                    contentInset={ { top: 20, bottom: 20 } }/>
            </View>
        )
    }
}
