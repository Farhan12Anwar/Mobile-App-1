import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from '../../navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
   <NavigationContainer independent={true}>
    <RootNavigation />
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}
