# redux-thunk-quickstart
 
# Why thunk?
Abstracting store logic out of components.

# What is redux-thunk?
without thunk we would make the service call and then dispatch the action with response. something ike below
 loadUser_withoutThunk() {
        Axios.get('https://reqres.in/api/users').then(res => {
            this.props.dispatch(updateUserAction(res.data.data))
        }
        ).catch(err => { console.log('error', err) })
    }

with thunk the action will be function. the function loads data first and dispatches the action to update the store later.

loadUser_withThunk() {
        this.props.dispatch(loadUserAction());
    }
const loadUserAction = () => {
    return (dispatch) => {
        Axios.get('https://reqres.in/api/users').then(res => {
            dispatch(updateUserAction(res.data.data))
        }
        ).catch(err => { console.log('error', err) })
    }
}

# How to configure thunk?

1) configure the middleware
	const store = createStore(rootReducer, applyMiddleware(thunk));
2) create the action creator to return the function that loads the data and then dispatches the action later
const loadUserAction = () => {
    return (dispatch) => {
        Axios.get('https://reqres.in/api/users').then(res => {
            dispatch(updateUserAction(res.data.data))
        }
        ).catch(err => { console.log('error', err) })
    }
}
