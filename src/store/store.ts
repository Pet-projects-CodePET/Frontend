import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userApi } from '@/services/UserService';
import { generalApi } from '@/services/GeneralService';
import { projectsApi } from '@/services/ProjectService';
import { specilistsApi } from '@/services/SpecialistService';

const rootReducer = combineReducers({
	[userApi.reducerPath]: userApi.reducer,
	[specilistsApi.reducerPath]: specilistsApi.reducer,
	[generalApi.reducerPath]: generalApi.reducer,
	[projectsApi.reducerPath]: projectsApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			userApi.middleware,
			specilistsApi.middleware,
			generalApi.middleware,
			projectsApi.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;