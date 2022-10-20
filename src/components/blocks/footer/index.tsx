import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../../templates/home';

const HomeRoute = () => (
  <>
    <Home />
  </>
);

// TODO: 各ページの実装が終わり次第コンポーネントを設定
const MapRoute = () => <Text>Map</Text>;

const AccountRoute = () => <Text>Account</Text>;

const SettingRoute = () => <Text>Seting</Text>;
const Footer = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: '', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    {
      key: 'map',
      title: '',
      focusedIcon: 'map',
      unfocusedIcon: 'map-outline',
    },
    { key: 'account', title: '', focusedIcon: 'account' },
    {
      key: 'cog',
      title: '',
      focusedIcon: 'cog',
      unfocusedIcon: 'cog-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    map: MapRoute,
    account: AccountRoute,
    cog: SettingRoute,
  });
  return (
    <BottomNavigation
      barStyle={{ backgroundColor: '#ECEFF1' }}
      navigationState={{ index, routes }}
      activeColor={'#FF3D3C'}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Footer;
