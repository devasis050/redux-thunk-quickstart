import logo from './logo.svg';
import './App.css';
import UserComponent from './users/userComponent';
import {Provider} from 'react-redux';
import store from './store'
 
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserComponent/>
      </Provider>
    </div>
  );
}

export default App;
