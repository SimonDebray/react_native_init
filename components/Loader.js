import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.5);
    this.animatedValue2 = new Animated.Value(0);
  }
  
  componentDidMount() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 4,
      delay: 800
    }).start();
    
    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 0,
      duration: 1500
    }).start();
  }
  
  render() {
    const truckStyle = {
      transform: [{ scale: this.animatedValue }]
    };
    
    const scaleText = {
      transform: [{ scale: this.animatedValue2 }]
    };
    
    return (
      <View
        style={styles.container}
      >
        <Animated.View style={[styles.ring, truckStyle]}>
          <Animated.Image
            source={require("../img/game.png")}
            style={[
              {
                resizeMode: "contain",
                width: 200,
                height: 200
              }
            ]}
          />
        </Animated.View>
        
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 20,
              width: width / 2,
              height: 4,
              backgroundColor: "#fff",
              borderRadius: 2
            },
            scaleText
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0277BD"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  ring: {
    backgroundColor: "#40C4FF",
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#FFF",
    padding: 7
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20
  }
});
