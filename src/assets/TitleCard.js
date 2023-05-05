import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

const TitleCard = () => {
  return (
    <ScrollView horizontal={true}
        style={{
        padding: 10,
        }}>
        <View style={{
          height: 50, 
          justifyContent: 'center',
        }}>
          <Text style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: 'black',
          }}>
            Character List
          </Text>
        </View>
    </ScrollView>
  );
};
export default TitleCard;