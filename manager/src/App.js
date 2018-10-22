import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;