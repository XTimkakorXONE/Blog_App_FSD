import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormSelectors = (state: StateSchema) => state.addCommentForm?.text;
export const getAddCommentFormSelectorsError = (state: StateSchema) => state.addCommentForm?.error;
