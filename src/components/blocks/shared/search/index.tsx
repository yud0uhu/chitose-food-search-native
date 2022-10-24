import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import SearchList from '../search-list';

type Props = {
  fetchUrl: string;
};
const Search = ({ fetchUrl }: Props) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <>
      <Searchbar
        iconColor="#FF3D3C"
        placeholder="キーワードで探す"
        placeholderTextColor={'#C4C4C4'}
        onChangeText={onChangeSearch}
        value={searchQuery}
        elevation={0}
        maxLength={40}
      />
      <SearchList fetchUrl={fetchUrl} keyword={searchQuery} />
    </>
  );
};

export default Search;
