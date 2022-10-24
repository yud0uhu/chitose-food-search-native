import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardList from '../../blocks/shared/card-list';
import ButtonList from '../../blocks/shared/button-list';
import Search from '../..//blocks/shared/search';
import { requests, keyword_search_requests } from '../../../util/request';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import SearchList from '../../blocks/shared/search-list';

const Home = () => {
  const render = () => {
    const [isSearch, setIsSearch] = useState(false);
    let searchresult;
    if (isSearch) {
      searchresult = (
        <>
          <CardList title="時間帯・スタイルから探す" type={'time'} fetchUrl={requests} />
          <CardList title="ジャンルから探す" type={'genre'} fetchUrl={requests} />
          <ButtonList title="予算から探す" type={'genre'} fetchUrl={requests} />
        </>
      );
    } else {
      searchresult = <>{/* <SearchList fetchUrl={fetchUrl} keyword={searchQuery} /> */}</>;
    }
  };
  return (
    <>
      {/* TODO: パフォーマンスを考慮しScrollViewをFlatListに修正 */}
      <ScrollView style={styles.container}>
        <Search fetchUrl={keyword_search_requests} />
        {/* {searchresult} */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#ECEFF1',
    padding: 13,
    marginHorizontal: 0,
  },
});
export default Home;
