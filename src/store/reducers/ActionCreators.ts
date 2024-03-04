import { AppDispatch } from '@/store/store';
import axios from 'axios';
import { IUser } from '@/store/models/IUser';
import {
	usersFetching,
	usersFetchingError,
	usersFetchingSuccess,
} from '@/store/reducers/UserSlice';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	dispatch(usersFetching());
	try {
		const response = await axios.get<IUser[]>(
			'https://fakestoreapi.com/products'
		);
		const usersData: IUser[] = response.data.map((user) => ({
			...user,
			isLiked: false,
		}));

		dispatch(usersFetchingSuccess(usersData));
	} catch (e: unknown) {
		if (e instanceof Error) {
			dispatch(usersFetchingError(e.message));
		} else {
			dispatch(usersFetchingError('An unknown error occurred'));
		}
	}
};

export const createUser =
	(userData: IUser) => async (dispatch: AppDispatch) => {
		dispatch(usersFetching());
		try {
			const response = await axios.post<IUser>(
				'https://fakestoreapi.com/users',
				userData
			);
			const newUser: IUser = response.data;

			dispatch(usersFetchingSuccess([newUser]));
		} catch (e: unknown) {
			if (e instanceof Error) {
				dispatch(usersFetchingError(e.message));
			} else {
				dispatch(usersFetchingError('An unknown error occurred'));
			}
		}
	};
