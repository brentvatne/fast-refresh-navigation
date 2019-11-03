import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Screen from './Screen';

let App = createAppContainer(
  createStackNavigator({
    Screen,
  }),
);

export default App;
