import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  leftIcon: {
    position: 'absolute',
    width: 32,
    height: 32,
    left: 19,
    top: 18,
  },
  rightIcon: {
    position: 'absolute',
    width: 32,
    height: 32,
    left: 342,
    top: 19,
  },
});
const appbar = () => {
  return (
    <Appbar.Header style={{ backgroundColor: '#FF3D3C' }}>
      <Appbar.Action
        style={styles.leftIcon}
        iconColor="#455A64"
        icon="text-long"
        onPress={() => {}}
      />
      <Appbar.Action
        style={styles.rightIcon}
        iconColor="#455A64"
        icon="bell-outline"
        onPress={() => {}}
      />
    </Appbar.Header>
  );
};
export default appbar;
