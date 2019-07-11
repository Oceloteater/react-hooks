import React, { createContext } from 'react'

export const Store = createContext([]);

const initialState = {
    episodes: [],
    favourites: []
};

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    );
}