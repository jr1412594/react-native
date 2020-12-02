import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image} from 'react-native';

export default function App() {

  const [characters, setCharacters] = useState([])

useEffect(() => {
  fetch('https://breakingbadapi.com/api/characters')
  .then(response => response.json())
  .then(setCharacters)
}, [])

const renderCharacter = ({ item }) => {
  return (<Text>{item.name}</Text>,
  <Image source={{uri: item.img}}
  style={{width: 150, height: 100, alignContent: screenLeft }}
  />
  )
}
  return (
    <View style={styles.container}>
      <FlatList 
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    color: '#000'
  }
});
