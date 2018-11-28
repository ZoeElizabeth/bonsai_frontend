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
import { WebBrowser, } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { MonoText } from '../components/StyledText';
import AddItem from '../modal/AddItem';
import image from '../tree_img/export.js';
import Processgraph from '../charts/progress_circle';
import { Icon} from 'native-base';
import Splash from '../modal/Splash';
import GrowingTree from '../charts/Tree.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Bonsai',
    headerStyle: {
      backgroundColor: '#AAD9A5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
  });




  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      actionSource: [], // List of all actions
      currentAction: '',
      showModal: false,
    }
    this.handlePress = this.handlePress.bind(this);
  }

  //Toggles the description based on item/actions.id
  handlePress(id, item){
    if (id === this.state.currentAction){
      this.setState({
        currentAction: ''});
    } else {
      this.setState({
        currentAction: id,});
    }
  }

  handleclose(){
    this.setState({
      currentAction: '',

    });
  }
  // componentDidMount(){
  //   this.fetchActions()  
  // }

  dailyListActions(dayli_list_id, actions) {
    //grabbing daily list id  from action and comparing to a lists id
    return   this.props.screenProps.fetchActions.filter(action => action.dayli_list_id === dayli_list_id);
  }

  // fetchActions = () => {
  
  //   return fetch('http://localhost:8080/user/1/actions')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     this.setState({
  //       isLoading: false,
  //       actionSource: responseJson,
  //     });
  //   })
  //   .catch((error) =>{
  //     console.error(error);
  //   });
  // }

  //Rendering list items to show if they are a red or green action
  itemList = (item) => {
    if (!item.redFlag){
      return ( 
      <View stlye={{backgroundColor: '#fff'}}>
        <View style={styles.row}>
          <Icon style={styles.icon}  type="FontAwesome" name="circle"></Icon>
          <Button 
            color="#538B9C"
            title={item.action_title} 
            onPress={this.handlePress.bind(this, item.id)}> 
          </Button>
        </View>

    {this.state.currentAction === item.id ? <View style={{paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 18}}><Icon style={{paddingLeft: 15,
      paddingRight: 15,
    color: item.color_category,
    fontSize: 25,
    alignItems: 'center'}}  type="FontAwesome" name="caret-right"></Icon><Text style={styles.description}  id={item.id}>{item.description}</Text></View> : null}
  
    </View>)
    }
    return ( <View>
      <View style={styles.row}>
        <Icon style={styles.icon2}  type="FontAwesome" name="circle"></Icon>
        <Button 
          color="#538B9C"
          title={item.action_title} 
          onPress={this.handlePress.bind(this, item.id)}> 
        </Button>
      </View>

    {this.state.currentAction === item.id ? <View style={{paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 18}}><Icon style={{paddingLeft: 15,
      paddingRight: 15,
    color: item.color_category,
    fontSize: 25,
    alignItems: 'center'}}  type="FontAwesome" name="caret-right"></Icon><Text style={styles.description}  id={item.id}>{item.description}</Text></View> : null}
  
  </View>)
  }

  render() {
    // TODO: Don't hard-code first parameter.
    //       It should be a dynamic daily list ID.
    const dailyActions = this.dailyListActions(1, this.props.screenProps.fetchActions);
  

    return (
      
      <View style={styles.container}>
      <Splash/>
        {/* <Text style={styles.tabBarInfoText}>Welcome to Bonsai</Text>  */}
        <View style={styles.tree_graph}>
          <GrowingTree   fetchActions={this.props.screenProps.fetchActions} />
          <View style={styles.graph}>
          <Processgraph style={styles.graph} actionSource={dailyActions}/> 
        </View>
        </View>
       
        <View style={styles.center} > 
          <AddItem  refreshActions={this.props.screenProps.refreshActions} fetchActions={this.props.screenProps.fetchActions}  />  
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>


        <FlatList 
          data={dailyActions.reverse()}
          renderItem={({item}) => this.itemList(item) }
          keyExtractor={({id}, index) => id.toString()}/>
        </ScrollView>

        
   
      </View>
      
    );
  }


  //Rendering mode and handle errors with expo
  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '100%'
  },
  contentContainer: {
    paddingTop: 13,
    fontSize: 18,
    color: 'black',
    width: '100%',
  },

  tree_imgs: {
    top: 25,
    flex: 1,
    height: 200,
    width: '102%',
  },

  center: {
    paddingTop: 30,

    alignItems: 'center',

  },

  tree_graph: {
    top: 20,
     

  },

  icon:{
    paddingRight: 10,
    color: '#70B879',
    fontSize: 10,
    alignItems: 'center',
  },

  icon2:{
    paddingRight: 10,
    fontSize: 10,
    color: '#FFA0A0',
    alignItems: 'center',
  },

  fonty:{
    color: 'black',
    fontSize: 18,
  },

  tabBarInfoContainer: {
    position: 'absolute',
    top: 35,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#70B879',
    paddingVertical: 20,
  },

  tabBarInfoText: {
    top: 60,
    fontWeight: 'bold',
    color: '#70B879',
    fontSize: 18,

  },
  description: {
    marginRight: 40 ,
    color: '#2e5a68',
    fontSize: 15,
    
  },
  row: {
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 18,
},
graph: {
  // flex: 2,

}
});