import React from 'react'
import {Button, Text, View} from "react-native";
import {connect} from "react-redux"


mapStateToProps = (state) =>{
   return {
       text : state.text
   }
}


class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>{this.props.text}</Text>
                <Button
                    title="Go to about page"
                    onPress={() => navigate('About')}
                />
                <Text>Test</Text>
            </View>
        );
    }
}


export default connect(mapStateToProps)(HomeScreen)