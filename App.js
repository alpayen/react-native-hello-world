import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "./Home";
import AboutScreen from "./About";
import {createStore} from "redux";

import textReducer from './Reducer'
import {Provider} from "react-redux";
import React from "react";

let RootStack = createStackNavigator({
    Home: HomeScreen,
    About: AboutScreen,
});

let Navigation = createAppContainer(RootStack);


const store = createStore(textReducer)
// Render the app container component with the provider around it
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}