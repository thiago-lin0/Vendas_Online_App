import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import GlobalModal from './components/modal/globalModal/globalModal';
import Home from './modules/home';
import Login from './modules/login';
import store from './store';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    // Pode adicionar um componente de carregamento aqui, se necessário
    return null;
  }

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <GlobalModal />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
