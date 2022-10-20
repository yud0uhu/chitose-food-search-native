import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, FlatList } from 'react-native';
import axios from '../../../../util/axios';
import { Button } from 'react-native-paper';

const IMAGE_WIDTH = Dimensions.get('window').width;
const TEXT_DATA = [
  {
    id: '1',
    text: '500円以下',
  },
  {
    id: '2',
    text: '800円以下',
  },
  {
    id: '3',
    text: '1000円以下',
  },
  {
    id: '4',
    text: '2000円以下',
  },
  {
    id: '5',
    text: '3000円以下',
  },
  {
    id: '6',
    text: '4000円以下',
  },
  {
    id: '7',
    text: '5000円以下',
  },
  {
    id: '8',
    text: '10000円以下',
  },
  {
    id: '9',
    text: '上限なし',
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

const ButtonList = ({ title, type, fetchUrl }: Props) => {
  const [status, setStatus] = React.useState(true);
  const [id, setId] = React.useState('');
  const [response, setResponse] = useState<Shop[]>([]);

  const onButtonPressed = (status: Boolean, id: string) => {
    setStatus(!status);
    setId(id);
    console.log(status);
    console.log(id);
  };

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
          data={TEXT_DATA}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <View>
              <Button
                nativeID={item.id}
                buttonColor={status && id === item.id ? '#FF3D3C' : '#ECEFF1'}
                style={styles.button}
                textColor={status && id === item.id ? '#FFF' : '#FF3D3C'}
                mode={'outlined'}
                onPress={() => onButtonPressed(status, item.id)}>
                <Text style={styles.buttonText}>{item.text}</Text>
              </Button>
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
    marginTop: 13,
    marginBottom: 13,
  },
  button: {
    width: 118,
    padding: 0,
    marginLeft: 3,
    marginTop: 12,
    borderColor: '#FF3D3C',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.0125,
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 5,
  },
});
export default ButtonList;
