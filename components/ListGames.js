import React from 'react'
import {ListItem, Text, ThemeProvider} from 'react-native-elements';

const theme = {
  Button: {
    containerStyle: {
      margin: 20
    },
    titleStyle: {
      color: "#fff"
    },
  },
  Input: {
    containerStyle: {
      margin: 20
    },
    titleStyle: {
      color: "#000"
    },
  },
};

class ListGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null,
      isLoading: true,
    };
  }
  
  componentWillMount() {
    //Start getting the first batch of data from reddit
    fetch("https://androidlessonsapi.herokuapp.com/api/game/list")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          games: responseJson,
          isLoading: false,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  render() {
    const { games, isLoading } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Text>
          Hello Games
        </Text>
        {games && games.map((l, i) => (
            <ListItem
              key={l.id}
              title={l.name}
            />
          ))
        }
      </ThemeProvider>
    );
  }
}

export default ListGames
