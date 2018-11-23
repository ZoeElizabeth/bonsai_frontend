import React from 'react';
import { SectionList, Image, StyleSheet, Text, View } from 'react-native';
import { Constants, Svg, EllipseProps } from 'expo';
import { AreaChart, Grid, ProgressCircle } from 'react-native-svg-charts'
import PropTypes from 'prop-types';

export default class ProcessGraph extends React.Component {
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource: 'here',  
    }
    this.fetchPoints = this.fetchPoints.bind(this);
  }

  componentDidMount(){
    this.fetchPoints()
  }

  fetchPoints = () => {
    
    return fetch('http://localhost:8080/user/1/')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson[0].greenPoints,
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  
  }
  render() {
    return(
        <View style={{ padding: this.props.padding, width: this.props.size + (this.props.padding * 2), 
          backgroundColor: 'transparent',
          marginLeft: 75,
        }}>
          <View>
            <ProgressCircle
              strokeWidth={this.props.stroke}
              style={{ height: this.props.size }}
              progress={this.state.dataSource/this.props.total}
              progressColor={this.props.color}
              startAngle={3.5 * Math.PI / 3}
              endAngle={8.5 * Math.PI / 3}
            />
          </View>
          <View style={{ position: 'absolute', bottom: 0, left: this.props.padding, width: this.props.size }}>
            <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold' }}>Growth Spurt</Text>
            <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>{this.state.dataSource}/{this.props.total}</Text>
          </View>
        </View>
        );
      }
}

ProcessGraph.propTypes = {
  result: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  padding: PropTypes.number,
  size: PropTypes.number,
  stroke: PropTypes.number,
  color: PropTypes.string
};

ProcessGraph.defaultProps = {
  result: 0,
  total: 200,
  padding: 5,
  size: 260,
  stroke: 8,
  color: '#AAD9A5'
};