import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';

//components
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene key="auth" hideNavBar={true}>
                    <Scene key="login" component={LoginForm} title="Please login" hideNavBar={false} initial/>
                </Scene>
                <Scene key="main" hideNavBar={true} type={ActionConst.RESET}>
                    <Scene
                        hideNavBar={false}
                        onRight={() => Actions.employeeCreate()}
                        rightTitle="Add"
                        key="list"
                        component={EmployeeList}
                        title="Employees"
                        initial/>
                    <Scene
                        hideNavBar={false}
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create employee" 
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;