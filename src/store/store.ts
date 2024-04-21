import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userApi } from '@/services/UserService';
import { generalApi } from '@/services/GeneralService';
import { projectApi } from '@/services/ProjectService';

const rootReducer = combineReducers({
	// projectReducer,
	[userApi.reducerPath]: userApi.reducer,
	[generalApi.reducerPath]: generalApi.reducer,
	[projectApi.reducerPath]: projectApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			userApi.middleware,
			generalApi.middleware,
			projectApi.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
