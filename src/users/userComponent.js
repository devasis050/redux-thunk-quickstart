import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { updateUserAction, loadUserAction } from '../actionCreator';
import {} from 'redux-thunk';

class UserComponent extends React.Component {
    constructor() {
        super();
    }

    loadUser_withoutThunk() {
        Axios.get('https://reqres.in/api/users').then(res => {
            this.props.dispatch(updateUserAction(res.data.data))
        }
        ).catch(err => { console.log('error', err) })
    }

    loadUser_withThunk() {
        this.props.dispatch(loadUserAction());
    }

    render() {
        return (
            <>
                <div className='d-flex justify-content-center'>
                    <button className='btn-primary m-4' onClick={() => this.loadUser_withThunk()}>Load users</button>
                </div>
                {this.props.users && this.props.users.map((user, index) => (
                    <div className='d-flex justify-content-center' key={index}>
                        {user.first_name + ' ' + user.last_name}
                    </div>))}
            </>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users }
}

export default connect(mapStateToProps)(UserComponent);