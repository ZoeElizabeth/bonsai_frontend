import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Constants, Svg, EllipseProps } from 'expo';
import { PieChart } from 'react-native-svg-charts'
import PropTypes from 'prop-types';

export default class OverviewViewPie extends React.Component {

    render() {

        const data = [
            {
                key: 1,
                amount: 50,
                svg: { fill: 'green' },
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: 'red' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: 'yellow' }
            },
            {
                key: 4,
                amount: 95,
                svg: { fill: 'orange' }
            },
            {
                key: 5,
                amount: 35,
                svg: { fill: 'purple' }
            },
            {
                key: 6,
                amount: 24,
                svg: {fill: 'blue'}
            }
        ]


        return (
            <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
            </PieChart>
        )
    }
}