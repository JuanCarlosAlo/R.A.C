export const BASE_URL = 'http://192.168.0.11:3000/';

export const USERS_URLS = {
	ALL_USERS: BASE_URL + 'users/all-users',
	GET_USER_BY_ID: BASE_URL + 'users/userById/',
	CREATE_USER: BASE_URL + 'users/create-user',
	EDIT_USER: BASE_URL + 'users/edit-user/',
	DELETE_USER: BASE_URL + 'users/delete-user/'
};

export const CARS_URLS = {
	ALL_CARS: BASE_URL + 'cars/all-cars',
	GET_CAR_BY_ID: BASE_URL + 'cars/carById/',
}
