import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginPage from './src/screens/loginScreen';
import HomeScreen from './src/screens/homeScreen';
import Index from './src';
import store from './store/store'
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
          <Stack.Screen name="index" component={Index} options={{headerBackVisible:false,headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
