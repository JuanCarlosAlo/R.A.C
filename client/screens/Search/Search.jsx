import React, { useReducer } from "react";
import {  Text, TouchableOpacity, View } from "react-native";
import SearchBanner from "../../components/search-banner/SearchBanner";
import { Picker } from "@react-native-picker/picker";
import SearchModal from "../../components/modal-search/SearchModal";
import CarList from "../../components/car-list/CarList";
import { INITIAL_STATE_FILTER, filterReducer } from "../../reducers/filterReducer";
import { FILTER_ACTIONS } from "../../actions/actions.filter";

const Search = () => {
  const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE_FILTER);
  
  const handleChangeSortOrder = (value) => {
    dispatch({ type: FILTER_ACTIONS.SET_SORT_ORDER, payload: value });
  };
 
  return (
    <View style={{ flex: 1 }}>
      
        <SearchBanner />
        <View style={{ padding: 20 }}>
          <Picker
            selectedValue={state.selectedSortOrder}
            onValueChange={handleChangeSortOrder}
          >
            <Picker.Item label="Ordenar" value="" enabled={false} />
            <Picker.Item label="Menor a Mayor Precio" value="asc" />
            <Picker.Item label="Mayor a Menor Precio" value="desc" />
          </Picker>
          <TouchableOpacity onPress={() => dispatch({ type: FILTER_ACTIONS.SET_MODAL_VISIBLE, payload: true })}>
            <Text>Mostrar Filtros Avanzados</Text>
          </TouchableOpacity>
        </View>
      <CarList filters={state}/>
      <SearchModal
        dispatch={dispatch}
        state={state}
      /> 
    </View>
  );
};

export default Search;
