import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import PantsChoice from '../screens/PantsChoice';
import ShirtChoice from '../screens/ShirtChoice';
import ShoesChoise from '../screens/ShoesChoise';
import Success from '../screens/Success';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Application" component={Home} />
      <Drawer.Screen name="SuccessPage" component={Success} />
    </Drawer.Navigator>
  );
}
