// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//
// import { IProject } from '@/store/models/IProject';
//
// interface ProjectState {
// 	users: IProject[];
// 	isLoading: boolean;
// 	error: string;
// }
//
// const initialState: ProjectState = {
// 	users: [],
// 	isLoading: false,
// 	error: '',
// };
//
// export const projectSlice = createSlice({
// 	name: 'user',
// 	initialState,
// 	reducers: {
// 		projectsFetching(state) {
// 			state.isLoading = true;
// 		},
// 		projectsFetchingSuccess(state, action: PayloadAction<IProject[]>) {
// 			state.isLoading = false;
// 			state.error = '';
// 			state.users = action.payload;
// 		},
// 		projectsFetchingError(state, action: PayloadAction<string>) {
// 			state.isLoading = false;
// 			state.error = action.payload;
// 		},
// 		removeProjects(
// 			state,
// 			action: PayloadAction<{
// 				id: number;
// 			}>
// 		) {
// 			state.users = state.users.filter((user) => user.id !== action.payload.id);
// 		},
// 	},
// });
//
// export const {
// 	projectsFetching,
// 	projectsFetchingSuccess,
// 	projectsFetchingError,
// 	removeProjects,
// } = projectSlice.actions;
//
// export default projectSlice.reducer;
