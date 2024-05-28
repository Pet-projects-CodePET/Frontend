import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import userReducer from '@/store/reducers/UserSlice';
// import projectReducer from '@/store/reducers/ProjectSlice';
import { userApi } from '@/services/UserService';
import { generalApi } from '@/services/GeneralService';
import { projectsApi } from '@/services/ProjectService';

const rootReducer = combineReducers({
	// userReducer,
	// projectReducer,
	[userApi.reducerPath]: userApi.reducer,
	[generalApi.reducerPath]: generalApi.reducer,
	[projectsApi.reducerPath]: projectsApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			userApi.middleware,
			generalApi.middleware,
			projectsApi.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
