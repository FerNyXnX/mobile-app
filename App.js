import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}