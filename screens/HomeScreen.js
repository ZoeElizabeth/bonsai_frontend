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
  ImageBackground
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import AddItem from '../modal/AddItem';
import Description from './Description.js';
import image from '../tree_img/export.js';
import Processgraph from '../charts/progress_circle';
import {  Icon} from 'native-base';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource: [],
      
    }
    this.fetching = this.fetching.bind(this);
  }

  componentDidMount(){
    this.fetching()
  }


  fetching = () => {
    return fetch('http://localhost:8080/dayli_list/1/actions')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.reverse(),
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }

itemList = (item) => {
console.log("start", this.state.dataSource, "source")
  if (!item.redFlag){
    return ( <View style={styles.contentContainer}><Icon style={styles.icon}  type="FontAwesome" name="circle"></Icon>
     <Text style={styles.fonty}>{item.action_title}, {item.color_category}</Text>
    </View>)
  }
  return  ( <View style={styles.contentContainer}><Icon style={styles.icon2}  type="FontAwesome" name="circle"></Icon>
  <Text style={styles.fonty}>{item.action_title}, {item.color_category}</Text>
 </View>)


}

  render() {



    return (
      
      <View style={styles.container}>

          <Text style={styles.tabBarInfoText} >Welcome to Bonsai</Text> 

        <View style={styles.tree_graph}>
          <ImageBackground style={styles.tree_imgs} source={image.tree_30} />
          <Processgraph/> 
        </View>
     
        <View style={styles.center} > 
          <AddItem fetching={this.fetching}/>  
        </View>
      <Description/>
       
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          extraData={this.state}
          data={this.state.dataSource}
          renderItem={({item}) => this.itemList(item) }
          keyExtractor={({id}, index) => id.toString()}
          />
      
        </ScrollView>
        </View>
      
    );
  }

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

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingTop: 13,
    paddingLeft: 10,
    textAlign: 'left',
    alignItems: 'center',
    fontSize: 18,
    color: 'black',
    flexDirection: 'row',
  },

  tree_imgs: {
    top: 45,
    flex: 1,
    height: 200,
    // overflow: 'visible',
  },
  center: {
    paddingTop: 65,
    alignItems: 'center',
  },
  tree_graph: {
    top: 60,
  // position: 'absolute',
  },
  icon:{
    paddingRight: 10,
    color: 'green',
    fontSize: 10,
  },
  icon2:{
    paddingRight: 10,
    fontSize: 10,
    color: 'red',
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
});