import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, ScrollView, View, Dimensions, FlatList, Text } from 'react-native';
import axios from '../../../../util/axios';

const ITEM_WIDTH = Dimensions.get('window').width;
const IMAGE_DATA1 = [
  {
    id: '1',
    genre: '朝食',
    url: '/Users/denham/Documents/chitose-food-app/sample-1.png',
  },
  {
    id: '2',
    genre: 'ランチ',
    url: '/Users/denham/Documents/chitose-food-app/sample-1.png',
  },
  {
    id: '3',
    genre: '夕食',
    url: '/Users/denham/Documents/chitose-food-app/sample-1.png',
  },
  {
    id: '4',
    genre: 'カフェ',
    url: '/Users/denham/Documents/chitose-food-app/sample-1.png',
  },
  {
    id: '5',
    genre: '飲み放題',
    url: '/Users/denham/Documents/chitose-food-app/sample-1.png',
  },
  {
    id: '6',
    genre: 'テイクアウト',
    url: '/Users/denham/Documents/chitose-food-app/sample-1.png',
  },
];
const IMAGE_DATA2 = [
  {
    id: '1',
    genre: '和食',
    url: '/Users/denham/Documents/chitose-food-app/sample-1.png',
  },
  {
    id: '2',
    genre: '洋食',
    url: '/Users/denham/Documents/chitose-food-app/sample-1.png',
  },
  {
    id: '3',
    genre: '中華',
    url: '/Users/denham/Documents/chitose-food-app/sample-1.png',
  },
];
type Props = {
  title: string;
  fetchUrl: string;
  type: string;
};
type Shop = {
  id: string;
  name: string;
  name_kana: string;
  logo_image: URL;
};

const CardList = ({ title, type, fetchUrl }: Props) => {
  const [response, setResponse] = useState<Shop[]>([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(fetchUrl)
        .then(function (response) {
          setResponse(response.data.results['shop']);
        })
        .catch(function (error) {
          return error;
        });
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <FlatList
          scrollEnabled={false}
          data={type == 'time' ? IMAGE_DATA1 : IMAGE_DATA2}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.url }} style={styles.image} />
              <Text style={styles.imageText}>{item.genre}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 13,
  },
  card: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 5 },
  image: {
    width: 118,
    height: 118,
    margin: 1,
    resizeMode: 'cover',
    stoke: 'black',
    fillOpacity: 0.2,
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 5,
  },
  imageText: {
    position: 'absolute',
    lineHeight: 28,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    paddingRight: 18,
    paddingLeft: 17,
    paddingTop: 24,
  },
});
export default CardList;
