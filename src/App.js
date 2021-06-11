import React from 'react';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/Navbar';
import './styles/App.scss';
import { BrowserRouter as Router,Route,  Switch} from 'react-router-dom';
import store from "./store";
import { Provider } from 'react-redux';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
      <Navbar/>
      <div className="container">
        <div className="py-3">
         <Switch>
           <Route exact path="/" component={Contacts} />
           <Route exact path="/contacts/add" component={AddContact} />
           <Route exact path="/contacts/edit/:id" component={EditContact} />
           
         </Switch>
        </div>

      </div>
    </div>
      </Router>
    </Provider>
  );

}

export default App;
