import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements'

import Menu from '../components/MenuComponent';
import Dishdetail from '../components/DishdetailComponent';
import Home from '../components/HomeComponent';
import Contact from '../components/ContactComponent'
import About from '../components/AboutComponent'
import Reservation from '../components/ReservationComponent';

const MenuNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name='menu' size={24}
        color='white'
        onPress={() => navigation.toggleDrawer()}
      />
    })
  },
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
  });

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name='menu' size={24}
      color='white'
      onPress={() => navigation.toggleDrawer()}
    />
  })
});
const AboutNavigator = createStackNavigator({
  About: { screen: About }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name='menu' size={24}
      color='white'
      onPress={() => navigation.toggleDrawer()}
    />
  })
});
const ContactNavigator = createStackNavigator({
  Contact: { screen: Contact }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name='menu' size={24}
      color='white'
      onPress={() => navigation.toggleDrawer()}
    />
  })
});

const ReservationNavigator = createStackNavigator({
  Reservation: { screen: Reservation }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24}
      iconStyle={{ color: 'white' }}
      onPress={() => navigation.navigate('DrawerToggle')} />
  })
})

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image source={require('../components/images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator({
  Home:
  {
    screen: HomeNavigator,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (<Icon
        name='home'
        type='font-awesome'
        size={24}
        color={tintColor}
      />
      )
    }
  },
  Menu:
  {
    screen: MenuNavigator,
    navigationOptions: {
      title: 'Menu',
      drawerLabel: 'Menu',
      drawerIcon: ({ tintColor }) => (<Icon
        name='list'
        type='font-awesome'
        size={24}
        color={tintColor}
      />
      )
    },
  },
  Contact:
  {
    screen: ContactNavigator,
    navigationOptions: {
      title: 'Contact',
      drawerLabel: 'Contact',
      drawerIcon: ({ tintColor }) => (<Icon
        name='address-card'
        type='font-awesome'
        size={22}
        color={tintColor}
      />
      )

    },
  },
  Reservation:
  {
    screen: ReservationNavigator,
    navigationOptions: {
      title: 'Reserve Table',
      drawerLabel: 'Reserve Table',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='cutlery'
          type='font-awesome'
          size={24}
          iconStyle={{ color: tintColor }}
        />
      ),
    }
  },
  About:
  {
    screen: AboutNavigator,
    navigationOptions: {
      title: 'About',
      drawerLabel: 'About',
      drawerIcon: ({ tintColor }) => (<Icon
        name='info-circle'
        type='font-awesome'
        size={24}
        color={tintColor}
      />
      )

    },
  }
}, {
  drawerBackgroundColor: '#D1C4E9',
  contentComponent: CustomDrawerContentComponent
});

const App = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default App;