// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { IUser } from '@/store/models/IUser';
//
// interface UserState {
// 	users: IUser[];
// 	isLoading: boolean;
// 	error: string;
// }
//
// const initialState: UserState = {
// 	users: [],
// 	isLoading: false,
// 	error: '',
// };
//
// export const userSlice = createSlice({
// 	name: 'user',
// 	initialState,
// 	reducers: {
// 		usersFetching(state) {
// 			state.isLoading = true;
// 		},
// 		usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
// 			state.isLoading = false;
// 			state.error = '';
// 			state.users = action.payload;
// 		},
// 		usersFetchingError(state, action: PayloadAction<string>) {
// 			state.isLoading = false;
// 			state.error = action.payload;
// 		},
// 		removeUser(
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
// 	usersFetching,
// 	usersFetchingSuccess,
// 	usersFetchingError,
// 	removeUser,
// } = userSlice.actions;
//
// export default userSlice.reducer;
