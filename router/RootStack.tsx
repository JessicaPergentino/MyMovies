import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../app/Home';
import DetailsMovie from '../app/DetailsMovie';

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
        options={{title: ''}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsMovie}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
