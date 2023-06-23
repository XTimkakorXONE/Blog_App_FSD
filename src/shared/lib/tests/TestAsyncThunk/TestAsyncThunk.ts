import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) =>
 AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: Dispatch;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const actionCreator = this.actionCreator(arg);
        const action = await actionCreator(this.dispatch, this.getState, undefined);

        return action;
    }
}
