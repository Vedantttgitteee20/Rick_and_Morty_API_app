import {StyleSheet} from 'react-native';
import React from 'react';
import {View, Text, Image} from 'react-native';

const ImageCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 170,
      width: 170,
      elevation: 5,
      shadowColor: '#000',
      justifyContent:'center',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      borderWidth:2
    },
    image: {
      height: '100%',
      width: '100%',
      borderRadius: 8,
    },
  });
  

export default ImageCard;
