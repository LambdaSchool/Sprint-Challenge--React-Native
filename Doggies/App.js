import React, { Component } from 'react';
import {
  Animated,
  TouchableOpacity,
  Image,
  Text, 
  View,
  StyleSheet,
  Easing
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Dogs from './components/Dogs/Dogs.js';
import Dog from './components/Dog/Dog.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDog: []
    }
    this.dog1 = new Animated.Value(0);
    this.dog2 = new Animated.Value(0);
    this.text1 = new Animated.Value(0);
    this.text2 = new Animated.Value(0);
    this.button = new Animated.Value(0);
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      },
      container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: -20
      },
      icons: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10
      },
    });
  }

  componentDidMount = () => {
    console.log(this.props.screenProps);
    Animated.parallel([
      Animated.timing(this.dog1, {toValue: 1, duration: 600}),
      Animated.timing(this.dog2, {toValue: 1, duration: 600}),
      Animated.timing(this.text1, {toValue: 1, duration: 600, delay: 200}),
      Animated.timing(this.text2, {toValue: 1, duration: 600, delay: 300}),
      Animated.timing(this.button, {toValue: 1, duration: 600, delay: 400})
    ]).start();
  }

  updateDog = (arr) => {
    this.setState({ currentDog: arr }, this.props.navigation.navigate('Dog'));
  }

  render = () => {
    return (
      <View style={this.styles.container}>
        <LinearGradient 
          style={this.styles.container2}
          colors={['#8f94fb', '#4e54c8']}>
          <View style={this.styles.icons}>
            <Animated.Image
              style={{
                height: 70,
                width: 70,
                opacity: this.dog1,
                transform: [
                  {
                    translateX: this.dog1.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-75, 0]
                    })
                  }
                ]
              }}
              source={require('./public/dog.png')} />
            <Animated.Image
              style={{
                height: 70,
                width: 70,
                opacity: this.dog2,
                transform: [
                  {rotateY: '180deg'},
                  {
                    translateX: this.dog2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-75, 0]
                    })
                  }
                ]
              }}
              source={require('./public/dog.png')} />
          </View>
          <Animated.Text 
            style={{
              fontSize: 28,
              fontWeight: '900',
              color: '#fff',
              backgroundColor: 'transparent',
              marginBottom: 10,
              opacity: this.text1,
              transform: [
                {
                  translateY: this.text1.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0]
                  }) 
                }
              ]
            }}>Welcome to Doggies</Animated.Text>
          <Animated.Text 
            style={{
              fontSize: 20,
              fontWeight: '300',
              color: '#fff',
              backgroundColor: 'transparent',
              opacity: this.text2,
              transform: [
                {
                  translateY: this.text2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0]
                  }) 
                }
              ]
            }}>Here you will find some doggies.</Animated.Text>
          <Animated.View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: this.button,
              transform: [
                {
                  translateY: this.button.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0]
                  })
                }
              ]
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Dogs')}
              style={{
                width: '70%',
                height: 45,
                borderRadius: 45/2,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderColor: '#fff',
                marginTop: 20,
              }}>
              <Text 
                style={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  fontWeight: '900'
                }}>Get Started</Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      </View>
    );
  }
}

const Nav = StackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerTitle: 'Home',
      headerStyle: {
        backgroundColor: '#fff',
        borderWidth: 0,
        borderColor: '#4FB7EC',
        shadowColor: '#000000',
        shadowOffset: { width: 6, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5, 
      },
      headerTitleStyle: {
        color: '#4FB7EC'
      },
      headerBackTitleStyle: {
        color: '#4FB7EC'
      }
    },
  },
  Dogs: { 
    screen: Dogs,
    navigationOptions: {
      title: 'Dogs',
      headerTitle: 'Dogs',
      headerStyle: {
        backgroundColor: '#fff',
        borderWidth: 0,
        borderColor: '#4FB7EC',
        shadowColor: '#000000',
        shadowOffset: { width: 6, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5, 
      },
      headerTitleStyle: {
        color: '#4FB7EC'
      },
      headerBackTitleStyle: {
        color: '#4FB7EC'
      }
    },
  },
  Dog: { 
    screen: Dog,
    navigationOptions: {
      title: 'Dog',
      headerTitle: 'Dog',
      headerStyle: {
        backgroundColor: '#fff',
        borderWidth: 0,
        borderColor: '#4FB7EC',
        shadowColor: '#000000',
        shadowOffset: { width: 6, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5, 
      },
      headerTitleStyle: {
        color: '#4FB7EC'
      },
      headerBackTitleStyle: {
        color: '#4FB7EC'
      }
    },
  }
}, {
  headerMode: 'float',
  // mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(2)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const { index } = scene

      const width = layout.initHeight
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width * -1, 0, width],
      });

      const scale = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.75, 1, 0.75]
      });

      return { transform: [{ translateY }, {scale}] }
    },
  }),
});

<Nav
  screenProps={this} />

export default Nav;
