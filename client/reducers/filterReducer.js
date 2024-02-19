import { FILTER_ACTIONS } from '../actions/actions.filter';

export const INITIAL_STATE_FILTER = {
    selectedSortOrder: "title",
    priceRange: 0,
    modalVisible: false,
    filters: {
      brand: "",
      fuel: "",
      type: "",
    },
  };
export const filterReducer = (state, action) => {

  switch (action.type) {
    case FILTER_ACTIONS.SET_SORT_ORDER:
      return { ...state, selectedSortOrder: action.payload };
    case FILTER_ACTIONS.SET_PRICE_RANGE:
      return { ...state, priceRange: action.payload };
    case FILTER_ACTIONS.SET_MODAL_VISIBLE:
      return { ...state, modalVisible: action.payload };
    case FILTER_ACTIONS.SET_FILTERS:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};
