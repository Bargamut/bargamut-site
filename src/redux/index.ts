import { createStore, Reducer, Action } from 'redux';

enum ECounterActions {
	INCREMENTED = 'counter/incremented',
};

type TAction = Action<ECounterActions>;

interface IAppState {
	value: number;
}

const initialState: IAppState = {
	value: 0,
};

const mainReducer: Reducer<IAppState, TAction> = (state = initialState, action) => {
	switch (action.type) {
		case ECounterActions.INCREMENTED:
			return { value: state.value + 1 }
	
		default:
			return state;
	}
};

const mainStore = createStore(mainReducer);