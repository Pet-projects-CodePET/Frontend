import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '@/store/reducers/UserSlice';
import projectReducer from '@/store/reducers/ProjectSlice';

const rootReducer = combineReducers({
	userReducer,
	projectReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
