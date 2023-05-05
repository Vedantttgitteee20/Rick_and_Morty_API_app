/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Header from './src/assets/pages/Header';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomePage from './src/assets/pages/HomePage';
const client= new ApolloClient({
  // uri: process.env.REACT_APP_API_URL,
  uri : 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})
function App(): JSX.Element {

  return (
    <>
    <ApolloProvider client={client}>
    <ScrollView style={styles.LandingScreen}>  
      <Header/>
      <HomePage/>
    </ScrollView >
    </ApolloProvider>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
  },
  LandingScreen: {
    backgroundColor: 'white',
    height: '100%'
  }
});

export default App;
