import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Constants, Svg, EllipseProps } from 'expo';
import { LineChart, Grid, YAxis, XAxis, AreaChart } from 'react-native-svg-charts'
import PropTypes from 'prop-types';

export default class GraphChart extends React.Component {

    constructor(props){
        super(props);
        this.state ={ 
          isLoading: true,
          actionSource: [], // List of all actions
          allGreenActions: [],
          allRedActions: [],
        }
        this.fetchActions = this.fetchActions.bind(this);
        this.sortData =this.sortData.bind(this)
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
                    this.fetchActions().then(() => {
                      this.getData()
                });

                }
    


                getData = () => {    
      
                  let listRed = [];
                  let listGreen = [];
            
                this.state.actionSource.forEach(function(action, index) {
          
                  if (action.redFlag === false) {
                    if (listGreen.hasOwnProperty(action.dayli_list_id)) {
                      listGreen[action.dayli_list_id].push(action);
                    }else {
                      listGreen[action.dayli_list_id] = [action];
                    } 
                  }
                  if (action.redFlag === true) {
                    if (listRed.hasOwnProperty(action.dayli_list_id)) {
                      listRed[action.dayli_list_id].push(action);
                    }else {
                      listRed[action.dayli_list_id] = [action];
                    }
          
          
              
                }
               
                
          
              });
                  
          
              
              this.sortData(listGreen, listRed)
          
          
              }

              sortData = (green, red) => {

              let redLengths = []
              let greenLengths = []
              
              
                console.log("start",red, "red")
                green.forEach(function(y, two) {
                  greenLengths.push(y.length)
                })
                red.forEach(function(x) {
                  redLengths.push(x.length)
                })
                  console.log(redLengths, "go")
                  console.log(greenLengths, "go")

                  this.setState({
                    allGreenActions: greenLengths,
                    allRedActions: redLengths, });
              
              }

              render() {
      const redActions = this.state.allRedActions
      const greenActions = this.state.allGreenActions

      const data = [
        {
            value: 50,
            label: 'One',
        },
        {
            value: 10,
            label: 'Two',
        },
        {
            value: 40,
            label: 'Three',
        },
        {
            value: 95,
            label: 'Four',
        },
        {
            value: 85,
            label: 'Five',
        },
    ]


                return (
                  <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                    <YAxis
                    data={greenActions}
                 
               
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    // formatLabel={(_, index) => data[ index ].label}
                />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                        <AreaChart
                            style={ { flex: 1 } }
                            data={ greenActions }
                            svg={{ stroke: '#70B879' }}
                            contentInset={ { top: 20, bottom: 20 } }
                           
                        >
                            <Grid/>
                        </AreaChart>
                        <AreaChart
                            style={ StyleSheet.absoluteFill }
                            data={ redActions }
                            svg={{ stroke: '#FFA0A0' }}
                            contentInset={ { top: 20, bottom: 20 } }
                           
                        />
                                              <XAxis
                            data={ greenActions }
                            svg={{
                                fill: 'black',
                                fontSize: 8,
                                fontWeight: 'bold',
                                rotation: 20,
                                originY: 30,
                                y: 5,
                            }}
                       
                            numberOfTicks={ 7 }
                            style={{ marginHorizontal: -15, height: 20 }}
                            contentInset={{ left: 10, right: 25 }}
                     
                        />
                    </View>
                    </View>
                )
            }
        
        }
        
              

              // render() {

        //         const data = [
        //             {
        //                 value: 50,
        //                 date: "1"
        //             },
        //             {
        //                 value: 10,
        //                 date: "6",
        //             },
        //             {
        //                 value: 150,
        //                 date: "5",
        //             },
        //             {
        //                 value: 10,
        //                 date: "4",
        //             },
        //             {
        //                 value: 100,
        //                 date: "3",
        //             },
        //             {
        //                 value: 20,
        //                 date: "2",
        //             },
        //         ]
        //         const axesSvg = { fontSize: 10, fill: 'grey' };
        // const verticalContentInset = { top: 10, bottom: 10 }
        // const xAxisHeight = 30
        //         return (
        //             <View style={{ height: 200, padding: 20 }}>
        //                             <YAxis
        //      data={ data }
        //      svg={{
        //          fill: 'black',
        //          fontSize: 8,
        //          fontWeight: 'bold',
        //          rotation: 20,
        //          originX: 30,
        //          x: 5,
        //      }}
        
        //      numberOfTicks={ 6 }
        //      style={{ marginHorizontal: -15, height: 20 }}
        //      contentInset={{ left: 10, right: 25 }}
        //         />
        //                 <AreaChart
        //                     style={{ flex: 1 }}
        //                     data={ data }
        //                     yAccessor={ ({ item }) => item.value }
        //                     xAccessor={ ({ item }) => item.date }
                         
        //                     contentInset={{ top: 10, bottom: 10 }}
        //                     svg={{ fill: 'green' }}
               
        //                 >
        //                     <Grid/>
        //                 </AreaChart>
        //                 <XAxis
        //                     data={ data }
        //                     svg={{
        //                         fill: 'black',
        //                         fontSize: 8,
        //                         fontWeight: 'bold',
        //                         rotation: 20,
        //                         originY: 30,
        //                         y: 5,
        //                     }}
                       
        //                     numberOfTicks={ 12 }
        //                     style={{ marginHorizontal: -15, height: 20 }}
        //                     contentInset={{ left: 10, right: 25 }}
                     
        //                 />
        //             </View>
        //         )
        //     }
        
        // }
         

//     render() {


//       const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

//       const axesSvg = { fontSize: 10, fill: 'grey' };
//       const verticalContentInset = { top: 10, bottom: 10 }
//       const xAxisHeight = 30


//         return (

//           <View style={ { height: 200 } }>
//                    {/* <YAxis
//       data={greenActions}
//       style={{ marginBottom: xAxisHeight }}
//       contentInset={verticalContentInset}
//       svg={axesSvg}
//   /> */}
//                 <AreaChart
//                     style={ { flex: 1 } }
//                     data={ redActions }
//                     svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
//                     contentInset={ { top: 20, bottom: 20 } }
              
//                 >
//                     <Grid/>
//                 </AreaChart>
//                 <AreaChart
//                     style={ StyleSheet.absoluteFill }
//                     data={ greenActions }
//                     svg={{ fill: 'rgba(34, 128, 176, 0.5)' }}
//                     contentInset={ { top: 20, bottom: 20 } }
              
//                 />


        
//       <XAxis
//           style={{ marginHorizontal: -10, height: xAxisHeight }}
//           data={data}
//           formatLabel={(value, index) => index}
//           contentInset={{ left: 10, right: 10 }}
//           svg={axesSvg}
//       />

//       </View>
//   )
// }

// }



          
  //           <View style={ { height: 200 } }>

  //               <LineChart
  //                   style={ { flex: 1 } }
  //                   data={ greenActions }
  //                   svg={{ stroke: 'green' }}
  //                   contentInset={ { top: 20, bottom: 20 } }>
  //                   <Grid/>
  //               </LineChart>
  //               <LineChart
  //                   style={ StyleSheet.absoluteFill }
  //                   data={ redActions }
  //                   svg={{ stroke: 'red'}}
  //                   contentInset={ { top: 20, bottom: 20 } }/>
  //                     <View>
  //         <XAxis
  //         style={{ marginHorizontal: -10, height: xAxisHeight }}
  //         data={greenActions}
  //         formatLabel={(value, index) => index}
  //         contentInset={{ left: 10, right: 10 }}
  //         svg={axesSvg}
  //     />
  //       </View>
  //    </View>
  //       )
  //   }
  
  // }

//   <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>

//   <View style={{ flex: 1, marginLeft: 10 }}>
//       <LineChart
//           style={{ flex: 1 }}
//           data={data}
//           contentInset={verticalContentInset}
//           svg={{ stroke: 'rgb(134, 65, 244)' }}
//       >
//           <Grid/>
//       </LineChart>

//   </View>
// </View>
// ) 
// }

// }

