import { UPDATE_USER } from './actionTypes';
import Axios from 'axios';

const updateUserAction = (users) => {
    return {
        type: UPDATE_USER,
        payload: users
    }
}
// Returns a dispatcher function that dispatches an action at a later time
const loadUserAction = () => {
    return (dispatch) => {
        Axios.get('https://reqres.in/api/users').then(res => {
            dispatch(updateUserAction(res.data.data))
        }
        ).catch(err => { console.log('error', err) })
    }
}

export { updateUserAction, loadUserAction };