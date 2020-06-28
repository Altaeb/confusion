import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Menu from '../components/MenuComponent';
import Dishdetail from '../components/DishdetailComponent'

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

const App = createAppContainer(MenuNavigator);

export default App;