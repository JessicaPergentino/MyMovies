import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../app/Home';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#7f8c8d'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'MyMovies'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
