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
import image from '../tree_img/export.js';
import Processgraph from '../charts/progress_circle';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://localhost:8080/dayli_list/1/actions')
      .then((response) => response.json())
      .then((responseJson) => {
            console.log(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render() {



    return (
      
      <View style={styles.container}>

          <Text style={styles.tabBarInfoText} >Welcome Back to Bonsai</Text> 
       
        <ImageBackground style={styles.tree_imgs} source={image.tree_30} />
        <Processgraph/> 
        <View style={styles.center} > 
        <AddItem />  
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>


        
     
        <FlatList
          extraData={this.state}
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={styles.contentContainer}>{item.redFlag ? 'o' : 't'}, {item.action_title}, {item.color_category}</Text>}
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
    paddingTop: 22,
    paddingLeft: 10,
    textAlign: 'left',
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
  tree_imgs: {
    top: 105,
    flex: 1,
    height: 200,
    overflow: 'visible',

  },
  center: {
    paddingTop: 20,
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2
}
});