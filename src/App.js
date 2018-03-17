import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDyqfFH2DyhZwPbBown_EIZpU1M W-z0cM0",
            authDomain: "authentication-910b6.firebaseapp.com",
            databaseURL: "https://authentication-910b6.firebaseio.com",
            projectId: "authentication-910b6",
            storageBucket: "authentication-910b6.appspot.com",
            messagingSenderId: "286522487634"
          })

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true})
            }
            else{
                this.setState({loggedIn: false})
            }
        })
    }

    renderContent() {
        if(this.state.loggedIn) {
            return(
                <View>
                    <Button
                        onPress= { () => {
                            firebase.auth().signOut()
                            console.log("Logged Out");
                        }}
                    >Log Out
                    </Button>
                </View>
            );
        }

        return <LoginForm />;
    }


    render() {
        return(
            <View>
                <Header headerText="Authentication"></Header>
                { this.renderContent() }
            </View>
        );
    }
};

export default App;