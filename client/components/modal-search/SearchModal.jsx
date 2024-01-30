import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";
import { FILTER_ACTIONS } from "../../actions/actions.filter";
import { ALL_CAR_BRANDS, ALL_CAR_TYPES, ALL_FUEL_TYPES } from "../../constants/filterOptions";
import FilterPicker from "../filterPicker/FilterPicker";

const SearchModal = ({ dispatch, state }) => {
 

  const setPriceRange = (value) => {
    dispatch({ type: FILTER_ACTIONS.SET_PRICE_RANGE, payload: value });
  };

  const setFilters = (newFilters) => {
    dispatch({ type: FILTER_ACTIONS.SET_FILTERS, payload: newFilters });
  };

  const handleApplyFilters = () => {
    dispatch({ type: FILTER_ACTIONS.SET_MODAL_VISIBLE, payload: false });
   
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={state.modalVisible}
      onRequestClose={() => dispatch({ type: FILTER_ACTIONS.SET_MODAL_VISIBLE, payload: false })}
      
    >
      <View style={{ marginTop: 22 }}>
        <View>
          <Text>Selecciona las opciones de filtro:</Text>

          <Text>Rango de Precio: ${state.priceRange}</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={10000}
            step={100}
            defaultValue={state.priceRange}
            value={state.priceRange}
            onValueChange={(value) => setPriceRange(value)}
          />
          <FilterPicker array={ALL_CAR_BRANDS} setFilters={setFilters} state={state} valueKey={'brand'} />
          <FilterPicker array={ALL_FUEL_TYPES} setFilters={setFilters} state={state} valueKey={'fuel'} />
          <FilterPicker array={ALL_CAR_TYPES} setFilters={setFilters} state={state} valueKey={'type'} />
          <TouchableOpacity onPress={handleApplyFilters}>
            <Text>Aplicar Filtros</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({ type: FILTER_ACTIONS.SET_MODAL_VISIBLE, payload: false })}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;
