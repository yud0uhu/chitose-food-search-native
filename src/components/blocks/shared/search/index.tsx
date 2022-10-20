import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      iconColor="#FF3D3C"
      placeholder="キーワードで探す"
      placeholderTextColor={'#C4C4C4'}
      onChangeText={onChangeSearch}
      value={searchQuery}
      elevation={0}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default Search;
