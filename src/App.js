import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MainTitle from './components/MainTitle';
import ProductsWrapper from './components/ProductsWrapper';
import ProductsList from './components/ProductsList';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = () => {
 return createStore(
  reducers,
   applyMiddleware(thunk)
 );
}

axios.defaults.baseURL = 'https://5dea5a130710f80014210282.mockapi.io';

const App = () => {
  return <Provider store={configureStore()}>
    <div className="app my-5">
      <MainTitle className='mb-5'/>
      <ProductsWrapper title='Products List'>
        <ProductsList/>
      </ProductsWrapper>      
    </div>
  </Provider>;
}

export default App;
