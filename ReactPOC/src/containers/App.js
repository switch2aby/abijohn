import React, { Component } from 'react';
import './App.css';
import { Route,BrowserRouter} from 'react-router-dom'
import Error from '../shared/componets/Error'
import SearchResultsComponent from '../bookaflight/brandedsearch/containers/SearchResultsContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
     
       <Route path="/:context?/:country?/:lang?/bookaflight/brandedsearch" exact component={SearchResultsComponent}/>
      
      </div>
      </BrowserRouter>
      
       
     
    );
  }
}

export default App;
