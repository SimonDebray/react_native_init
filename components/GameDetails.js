import React from 'react'
import {Button, Divider, Text, ThemeProvider} from 'react-native-elements';
import {loadGameDetails, lastGameId} from '../actions/games';
import {connect} from 'react-redux';
import {Linking, View} from 'react-native';
import Loader from './Loader';

const theme = {
  Button: {
    containerStyle: {
      margin: 20
    },
    titleStyle: {
      color: "#fff"
    },
  },
};

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.games.gameListById[ownProps.navigation.getParam("game_id")]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadGameDetails: (game, id) => {
      dispatch(loadGameDetails({game, id}))
    },
    lastGameId: (id) => {
      dispatch(lastGameId(id));
    }
  }
};

class GameList extends React.Component {
  
  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: state.params.game_name,
    };
  };
  
  static timeout;
  
  componentWillMount() {
    const {navigation} = this.props;
    const game_id = navigation.getParam("game_id");
    
    // Prevent API call if we have the details in state
    if (!(this.props && this.props.game && this.props.game && this.props.game.players)) {
  
      
      const that = this;
      that.timeout = setTimeout(function() {
        that.show();
      }, 1500);
      
      //Start getting the first batch of data from reddit
      fetch("https://androidlessonsapi.herokuapp.com/api/game/details?game_id=" + game_id)
        .then(response => response.json())
        .then(responseJson => {
          this.props.loadGameDetails(responseJson, game_id);
        })
        .catch(error => {
          console.error(error);
        });
    }
    else {
      this.show();
    }
  
    this.props.lastGameId(game_id);
  }
  
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  
  show () {
    this.setState({loadingTimeout: true});
  };
  
  learnMore(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.error("Don't know how to open URI: " + url);
      }
    });
  };
  
  render() {
    const { game } = this.props;
    
    let loadingTimeout = false;
    if (this.state) loadingTimeout = this.state.loadingTimeout;
    
    if (game && game.players && loadingTimeout) {
      return (
        <ThemeProvider theme={theme}>
          <View style={{padding: 20}}>
            <Text>
              Type: {game.type}
            </Text>
          </View>
          <Divider style={{ backgroundColor: 'blue' }} />
          <View style={{padding: 20}}>
            <Text>
              Number of players: {game.players}
            </Text>
          </View>
          <Divider style={{ backgroundColor: 'blue' }} />
          <View style={{padding: 20}}>
            <Text>
              Released year: {game.year}
            </Text>
          </View>
          <Divider style={{ backgroundColor: 'blue' }} />
          <View style={{padding: 20}}>
            <Text>
              Description:
            </Text>
            <Text>
              {game.description_en}
            </Text>
          </View>
  
          <Button title = 'Learn more'
                  onPress={() => {this.learnMore(game.url)}}
          />
        </ThemeProvider>
      );
    }
    else {
      return (
        <Loader/>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)
