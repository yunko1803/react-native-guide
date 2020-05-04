import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CountingApp from './src/screens/CountingApp';
import ColorScreen from './src/screens/ColorScreen';
import ColorScreen2 from './src/screens/ColorScreen2';
import TextScreen from './src/screens/TextScreen';
import PwdScreen from './src/screens/PwdScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListScreen,
		Image: ImageScreen,
		Count: CountingApp,
		Color: ColorScreen,
		Color2: ColorScreen2,
		Text: TextScreen,
		Password: PwdScreen,
		Box: BoxScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'App',
		},
	}
);

export default createAppContainer(navigator);
