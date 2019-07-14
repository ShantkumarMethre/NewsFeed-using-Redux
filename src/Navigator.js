import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import CardDetails from './components/CardDetail';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    CardDetails: { screen: CardDetails },
});

const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator;