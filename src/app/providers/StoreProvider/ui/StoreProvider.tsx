import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<StateSchema>);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
