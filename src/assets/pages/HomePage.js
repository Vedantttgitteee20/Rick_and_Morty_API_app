import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TitleCard from '../TitleCard';
import InfoCard from '../InfoCard';
import { GET_ALL_CHARACTERS } from '../queries';
// const client= new ApolloClient({
//   // uri: process.env.REACT_APP_API_URL,
//   uri : 'https://rickandmortyapi.com/graphql',
//   cache: new InMemoryCache()
// })
// client.query({
//     query: gql`
//         query GetAllCharacters {
//           characters{
//             results {
//               id
//               name
//               image
//               status
//               species
//               location{
//                 name
//               }
//             }
//           }
//         }
//     `
// }).then(result =>console.log(result))
// console.log(process.env.REACT_APP_API_URL)

const HomePage = props => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS)
  if(loading) return <View style={{height: '100%', justifyContent: 'center'}}><Text style={{
    fontSize: 20,
    flex:1,
    fontWeight: 'bold',
    color: 'black',
  }}>Loading...</Text></View>
  if(error) return <View style={{height: '100%', justifyContent: 'center'}}><Text style={{
    fontSize: 20,
    flex:1,
    fontWeight: 'bold',
    color: 'black',
  }}>Error{error.message}</Text></View>
    return (
      <>
      
      <ScrollView
          style={{
          height: '100%',
          padding: 10,
          backgroundColor: '#d2c3cc' 
          }}>
            <TitleCard/>
            <View>
                  {data?.characters?.results.map(character=>
                    <InfoCard character={character} key={character.id}/>
                    )}
            </View>
          
      </ScrollView>
      
      </>
    );
  };
  
  export default HomePage;