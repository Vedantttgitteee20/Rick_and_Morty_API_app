import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageCard from './ImageCard';
const InfoCard = ({character}) => {
  return (
    <>
    <View style={{
            height: 20, 
            backgroundColor: '#4e1e7d'
            }} />
    <View
        style={{
        padding: 10, 
        backgroundColor: '#fafb9f',
        }}>
            <View style={{flexDirection: 'row', marginTop:8}}>
              <View style={{flex:1}}>
                <ImageCard image={character.image}/>
              </View>
              <View style={{flex:1}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{
                    fontSize: 21,
                    fontWeight: 'bold',
                    color: 'black',
                    width: '100%',
                    numberOfLines: 1,
                    }}>{character.name}</Text>
                    <Text style={{
                    fontSize: 20,
                    marginTop:20,
                    color: 'black',
                    width: '100%',
                    numberOfLines: 1,
                    }}>{character.status}-{character.species}</Text>
                    <Text style={{
                    fontSize: 20,
                    marginTop:20,
                    color: 'black',
                    width: '100%',
                    numberOfLines: 1,
                    }}>Origin-{character.origin.name}</Text>
                </View>
              </View>
            </View>
            <View style={{marginTop:10}}>
              <Text style={{color: 'black',fontSize: 20,}}>Last Known Location-</Text>
              <Text style={{color: 'black',fontSize: 20,}}>{character.location.name}</Text>
            </View>
    </View>
    </>
  );
};
export default InfoCard;
