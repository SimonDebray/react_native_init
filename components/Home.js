import React from 'react'
import { Button, Text, ThemeProvider } from 'react-native-elements';
import {connect} from 'react-redux';

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

const mapStateToProps = state => {
  return {
    text: state.init.text
  }
};

class Home extends React.Component {
  
  render() {
    console.log('Je suis la');
    const { text } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Text>
          {text}
        </Text>
        <Button title = 'Info'
                onPress = {() => this.props.navigation.navigate('Info')}
        />
        <Button title = 'Games'
                onPress = {() => this.props.navigation.navigate('ListGames')}
        />
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(Home)
