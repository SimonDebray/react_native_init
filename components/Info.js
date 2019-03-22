import React from 'react'
import {Button, Input, ThemeProvider} from 'react-native-elements';
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
  
  static navigationOptions = {
    headerTitle: "Info page"
  };
  
  textSubmitHandler = () => {
    if (this.state) {
      this.props.updateText(this.state.text);
    }
    this.props.navigation.goBack()
  };
  
  render() {
    const { text } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Input
          onChangeText={text => this.setState({ text: text })}>
          {text}
        </Input>
        <Button title = 'Home'
                onPress = {() => this.textSubmitHandler()}
        />
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
