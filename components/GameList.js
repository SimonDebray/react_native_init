import React from 'react'
import {ScrollView} from 'react-native';
import {ListItem, ThemeProvider} from 'react-native-elements';
import {loadGames} from '../actions/games';
import {connect} from 'react-redux';
import Loader from './Loader';

const theme = {
  Button: {
    containerStyle: {
      margin: 20
    },
    titleStyle: {
      color: "#fff"
    },
  }
};

const mapStateToProps = state => {
  return {
    gameList: state.games.gameList,
    gameListById: state.games.gameListById,
    lastGameId: state.games.lastGameId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadGames: (games) => {
      dispatch(loadGames(games))
    }
  }
};

class GameList extends React.Component {
  
  static navigationOptions = {
    headerTitle: "Game list"
  };
  
  static timeout;
  
  componentWillMount() {
    // Prevent API call if we have the details in state
    if (!(this.props && this.props.gameList && this.props.gameList.length > 1)) {
      const that = this;
      that.timeout = setTimeout(function() {
        that.show();
      }, 1500);
      
      //Start getting the first batch of data from reddit
      fetch("https://androidlessonsapi.herokuapp.com/api/game/list")
        .then(response => response.json())
        .then(responseJson => {
      
          this.props.loadGames(responseJson);
        })
        .catch(error => {
          console.error(error);
        });
    }
    else {
      this.show();
    }
  }
  
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  
  show () {
    this.setState({loadingTimeout: true});
  };
  
  render() {
    const { gameList, lastGameId } = this.props;
    let loadingTimeout = false;
    if (this.state) loadingTimeout = this.state.loadingTimeout;
    
    if (gameList && gameList.length > 1 && loadingTimeout) {
      return (
        <ThemeProvider theme={theme}>
          <ScrollView>
            {gameList && gameList.map((l, i) => (
              
              <ListItem
                key={l.id}
                title={l.name}
                titleStyle={{ color: l.id === lastGameId ? '#aeaeae' : '#0022FF', fontWeight: 'bold' }}
                onPress={() => this.props.navigation.navigate('GameDetails', {game_id: l.id, game_name: l.name})}
              />
            ))}
          </ScrollView>
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
