import React from 'react'
import { Button, Text, ThemeProvider } from 'react-native-elements';
import { View } from 'react-native';
import {connect} from 'react-redux';

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
    text: state.init.text
  }
};

class Home extends React.Component {
  
  render() {
    const { text } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <View style={{padding: 20}}>
          <Text style={{fontWeight: 'bold'}}>
            {text}
          </Text>
        </View>
        <Button title = 'Info (exo1)'
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
