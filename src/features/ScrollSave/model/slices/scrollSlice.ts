import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/scrollSchema';

const initialState: ScrollSchema = {
    scroll: {},
};

export const scrollSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: scrollAcitons } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
