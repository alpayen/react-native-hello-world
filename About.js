import React from 'react'
import {Button, Text, View} from "react-native";

import {connect} from "react-redux"
import Input from "react-native-elements/src/input/Input";

const mapStateToProps = (state) => {
    console.log(state);
    return{
        text : state.text
    }
}


class AboutScreen extends React.Component {
    static navigationOptions = {
        title: 'About',
    };

    state = {inputText : this.props.text};

    dispatchTextAndGoBack() {
        const {goBack} = this.props.navigation;
        const action = {
            type : "TEXT",
            payload: this.state.inputText
        };
        this.props.dispatch(action);
        goBack();
    }

    componentWillMount(){
        this.dispatchTextAndGoBack = this.dispatchTextAndGoBack.bind(this)
    }

    render() {
        return (
            <View>
                <Text>{this.props.text}</Text>
                <Text>What a great app</Text>
                <Input onChangeText={text => this.setState({inputText: text})} value={this.state.inputText} placeholder='Donne moi du texte'/>
                <Button title={"click me"} onPress={this.dispatchTextAndGoBack}/>
            </View>
        );
    }

}

export default connect(mapStateToProps)(AboutScreen)