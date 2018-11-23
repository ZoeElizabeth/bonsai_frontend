import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Constants, Svg, EllipseProps } from 'expo';
import { LineChart, Grid } from 'react-native-svg-charts'
import PropTypes from 'prop-types';

export default class GraphChart extends React.Component {

    // render() {

    //     const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    //     const Gradient = () => (
    //         <Svg.Defs key={'gradient'}>
    //             <Svg.LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
    //                 <Svg.Stop offset={'0%'} stopColor={'black'}/>
    //                 <Svg.Stop offset={'100%'} stopColor={'purple'}/>
    //             </Svg.LinearGradient>
    //             {/* <Svg.LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
    //                 <Svg.Stop offset={'40%'} stopColor={'green'}/>
    //                 <Svg.Stop offset={'60%'} stopColor={'red'}/>
    //             </Svg.LinearGradient> */}
    //         </Svg.Defs>
    //     )

    //     const barData = [
    //         {
    //             values: data, 
    //             positive: {
    //                 fill: 'orange'
    //             },
    //             native: {
    //                 fill: 'blue'
    //             }
    //         }
    //     ]

    //     return (
    //         <LineChart
    //             style={ { height: 200 } }
    //             data={ data }
    //             contentInset={ { top: 20, bottom: 20 } }
    //             svg={{
    //                 strokeWidth: 2,
    //                 stroke: 'url(#gradient)',
    //             }}
    //         >
    //             <Grid/>
    //             <Gradient/>
    //         </LineChart>
    //     )

    // };
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
