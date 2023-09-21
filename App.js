
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Login from './components/Login';
import MenuItems from './components/MenuItems';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <Drawer.Navigator  initialRouteName="Welcome"  screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Welcome" component={Welcome} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Menu" component={MenuItems} />
          </Drawer.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});