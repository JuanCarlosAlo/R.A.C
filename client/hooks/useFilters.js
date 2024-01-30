import { useReducer } from 'react';
import { INITIAL_STATE_FILTER, filterReducer } from '../reducers/filterReducer';


export const useFilters = () => {
	const [filter, dispatch] = useReducer(filterReducer, INITIAL_STATE_FILTER);
	return { filter, dispatch };
};
