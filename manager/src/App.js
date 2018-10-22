import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';

//components
import LoginForm from './components/LoginForm';

type Props = {};
class App extends Component<Props> {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBphoMkRyGx_GHAcW5VVnkKtDEkdaKtzBE",
            authDomain: "tuto-reactn.firebaseapp.com",
            databaseURL: "https://tuto-reactn.firebaseio.com",
            projectId: "tuto-reactn",
            storageBucket: "tuto-reactn.appspot.com",
            messagingSenderId: "754781693112"
          };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;