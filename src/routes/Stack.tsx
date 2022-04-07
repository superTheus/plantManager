import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmationName } from '../pages/ConfirmationName';
import { PlantSelect } from '../pages/PlantSelect';
import { UserIdentification } from '../pages/UserIdentification';
import Welcome from '../pages/Welcome';
import { colors } from '../styles/colors';
import { StackParamList } from './types';

const {Navigator, Screen, Group} = createNativeStackNavigator<StackParamList>();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.white,
          },
        }}>
       <Screen name="Welcome" component={Welcome} />
       <Screen name="UserIdentification" component={UserIdentification} />
       <Screen name="ConfirmationName" component={ConfirmationName} />
       <Screen name="PlantSelect" component={PlantSelect} />
      </Navigator>
    </NavigationContainer>
  );
}