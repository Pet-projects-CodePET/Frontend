import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import userReducer from '@/store/reducers/UserSlice';
// import projectReducer from '@/store/reducers/ProjectSlice';
import { userApi } from '@/services/UserService';

const rootReducer = combineReducers({
	// userReducer,
	// projectReducer,
	[userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
