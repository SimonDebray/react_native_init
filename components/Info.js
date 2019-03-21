import React from 'react'
import {Button, Input, Text, ThemeProvider} from 'react-native-elements';
import {updateText} from '../actions/text';
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

const mapDispatchToProps = dispatch => {
  return {
    updateText: (text) => {
      dispatch(updateText(text))
    }
  }
};

class Info extends React.Component {
  
  textSubmitHandler = () => {
    if (this.state) {
      const {text} = this.state;
      if (text !== '') {
        this.props.updateText(text);
      }
    }
    this.props.navigation.goBack()
  };
  
  render() {
    const { text } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Text>
          {text}
        </Text>
        <Input
          onChangeText={text => this.setState({ text: text })} />
        <Button title = 'Home'
                onPress = {() => this.textSubmitHandler()}
        />
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
