
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.contentContainer}>
        <TouchableOpacity>
          <Image
            source={require('../img/Badho.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Welcome!</Text>
        <TouchableOpacity>
          <Image
            source={require('../img/MenuIcon.png')}
            style={styles.menu}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#4e1e7d',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  logo: {
    width: 50,
    height: 50,
  },
  menu: {
    width: 40,
    height: 40,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default Header;