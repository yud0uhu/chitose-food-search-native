import { useEffect, useState } from 'react';
import { Text } from 'react-native-paper';
import axios from '../../../../util/axios';
import { Image } from 'react-native';
type Props = {
  keyword: string;
  fetchUrl: string;
};
type Shop = {
  id: string;
  name: string;
  name_kana: string;
  logo_image: URL;
};
const SearchList = ({ keyword, fetchUrl }: Props) => {
  const [response, setResponse] = useState<Shop[]>([]);
  fetchUrl = fetchUrl + encodeURI(keyword);

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

  console.log(response);
  return (
    <>
      <Text>{keyword}</Text>
      {response.map((res) => (
        <Image
          key={res.id}
          style={{ width: 118, height: 118, left: 13, top: 181 }}
          source={{ uri: `${res.logo_image}` }}
        />
      ))}
    </>
  );
};
export default SearchList;
