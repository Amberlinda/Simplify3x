import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginPage from './src/screens/loginScreen';
import HomeScreen from './src/screens/homeScreen';
import Index from './src';
import store from './store/store'
import { Provider } from 'react-redux';
import { useState,useEffect } from 'react';
import { getData } from './src/hooks/asyncFuncs'

const Stack = createNativeStackNavigator();


export default function App() {

  const [isAuthenticated,setIsAuthenticated] = useState(false)

  useEffect(() => {
    getData("token",(value) => {
        console.log(value)
        if(value !== null && value === "somePass@123"){
            setIsAuthenticated(true)
        }else{
          setIsAuthenticated(false)
        }
    })
  },[])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          {
            !isAuthenticated ? <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
            : <Stack.Screen name="index" component={Index} options={{headerBackVisible:false,headerShown:false}}/>

          }
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
