const BASE = 'http://192.168.0.11:3000/';

export const USERS_URLS = {
	ALL_USERS: BASE + 'users/all-users',
	GET_USER_BY_ID: BASE + 'users/userById/',
	CREATE_USER: BASE + 'users/create-user',
	EDIT_USER: BASE + 'users/edit-user/',
	DELETE_USER: BASE + 'users/delete-user/'
};

export const CARS_URLS = {
	ALL_CARS: BASE + 'cars/all-cars'
}
