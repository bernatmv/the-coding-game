import { createStore, applyMiddleware, Store, combineReducers } from 'redux';
import logger from '../middlewares/loggerMiddleware';
import RootState from '../reducers/state/rootState';

export function configureStore(initialState?: RootState): Store<RootState> {
    // dev tools
    let create = window.devToolsExtension
        ? window.devToolsExtension()(createStore)
        : createStore;
    let reducers = {
    };

    // applyMiddleware
    const createStoreWithMiddleware = applyMiddleware(logger)(create);

    // that's the only required step for the app logic
    const store = createStoreWithMiddleware(combineReducers(reducers), initialState) as Store<RootState>;

    // hot reload to save app state
    if (module.hot) {
        //TODO: add reducers
    }

    return store;
}