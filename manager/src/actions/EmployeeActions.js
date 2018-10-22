import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};