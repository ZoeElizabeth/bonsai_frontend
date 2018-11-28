import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Constants, Svg, EllipseProps } from 'expo';
import { PieChart } from 'react-native-svg-charts'
import PropTypes from 'prop-types';

export default class OverviewViewPie extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      actionSource: [], // List of all actions
    }
    this.fetchActions = this.fetchActions.bind(this);
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
			
			componentDidMount() {
				this.fetchActions()   	
			}


      dailyListActions(dayli_list_id, actions) {
        //grabbing daily list id  from action and comparing to a lists id
        return actions.filter(action => action.dayli_list_id === dayli_list_id);
			}

			
    render() {

			const dailyActions = this.dailyListActions(1, this.state.actionSource)
				let orange_cat = [];
				let blue_cat = [];
				let purple_cat = [];
				let yellow_cat = [];
				let green_cat = [];
				let red_cat = [];


			dailyActions.forEach(function(actions) {
					
				if (!actions.redFlag) {
					green_cat.push(actions)
				} else {
					red_cat.push(actions)
				}
			});

			dailyActions.forEach(function(actions) {
		
				if (actions.color_category === '#4FBCFC') {
					blue_cat.push(actions)
				} if (actions.color_category === '#FCB54D') {
					orange_cat.push(actions)
				} if (actions.color_category === '#9A60F7') {
					purple_cat.push(actions)
				} if (actions.color_category === '#FCDF15') {
					yellow_cat.push(actions)
				}
			});
		
        const data = [
            {
                key: 1,
                amount: green_cat.length,
                svg: { fill: '#70B879' },
            },
            {
                key: 2,
                amount: red_cat.length,
                svg: { fill: '#FFA0A0' }
            },
            {
                key: 3,
                amount: yellow_cat.length,
                svg: { fill: '#FCDF15' }
            },
            {
                key: 4,
                amount: orange_cat.length,
                svg: { fill: '#FCB54D' }
            },
            {
                key: 5,
                amount: purple_cat.length,
                svg: { fill: '#9A60F7' }
            },
            {
                key: 6,
                amount: blue_cat.length,
                svg: {fill: '#4FBCFC'}
            }
				]
				

                const Labels = ({ slices, height, width }) => {
                    return slices.map((slice, index) => {
                        const { labelCentroid, pieCentroid, data } = slice;
                        return (
               
                            <Svg.G
                                key={index}
                                x={labelCentroid[ 0 ]}
                                y={labelCentroid[ 1 ]}
                            >

                   <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </Text>
                            </Svg.G>
                           
                        )
                    })
                }
        
                return (
                    <PieChart
                        style={{ height: 200 }}
                        valueAccessor={({ item }) => item.amount}
                        data={data}
                        spacing={0}
                        outerRadius={'95%'}
                    >
                        <Labels/>
                    </PieChart>
                )
            }
        
        }