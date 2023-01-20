import React from 'react';
import './App.css';
import { AddArticle } from './Components/AddArticle';
import { Provider } from 'react-redux';
import store from './Store';
import { Article } from './Components/Article';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddArticle />
        <Article />
      </Provider>
    </div>
  );
}

export default App;
