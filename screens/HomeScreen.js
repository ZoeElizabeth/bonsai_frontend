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
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import AddItem from '../modal/AddItem';


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
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }




  render() {


    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <AddItem/>

        </ScrollView>
      
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Welcome Back to Bonsai, Zoe</Text>


     
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={styles.contentContainer}>{item.color_category}, {item.action_title}</Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
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
    paddingTop: 120,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 25,
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
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,

  },

});