import App from 'next/app'
import React from 'react';
import {createWrapper} from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '../store/store'


class MyApp extends App{
  render(){
    const { Component, pageProps} = this.props
    return (
      <Provider store= {store}>
        <Component {...pageProps}></Component>
      </Provider>
    )
  }

}

const makestore= ()=> store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);