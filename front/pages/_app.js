import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import { crateStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import withRedux from 'next-redux-wrapper';

const NodeBird = ({ Component, store }) => {
    return (
        <Provider stroe={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType,
    store: ProtoTYpes.object
};

export default withRedux((initialState, options) => {
    const middlewares = [];
    const enhancer = compose(
        applyMiddleware(...middlewars),
        window && window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
    );
    const store = createStore(reducer, initialState);
    return store;
})(NodeBird);