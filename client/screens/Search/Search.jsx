import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import SearchBanner from "../../components/search-banner/SearchBanner";
import { Picker } from "@react-native-picker/picker";
import SearchModal from "../../components/modal-search/SearchModal";

const Search = () => {
  const [selectedSortOrder, setSelectedSortOrder] = useState("title");
  const [priceRange, setPriceRange] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [filters,setFilters] = useState({
    brand: '',
    fuel:'',
    type:'',
  })

  const handleChangeSortOrder = (value) => {
    setSelectedSortOrder(value);
  };
  const handleApplyFilters = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SearchBanner />
        <View style={{ padding: 20 }}>
          <Picker
            selectedValue={selectedSortOrder}
            onValueChange={handleChangeSortOrder}
          >
            <Picker.Item label="Ordenar" value="title" enabled={false} />
            <Picker.Item label="Menor a Mayor Precio" value="asc" />
            <Picker.Item label="Mayor a Menor Precio" value="desc" />
          </Picker>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text>Mostrar Filtros Avanzados</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <SearchModal
        handleApplyFilters={handleApplyFilters}
        modalVisible={modalVisible}
        priceRange={priceRange}
        setModalVisible={setModalVisible}
        setPriceRange={setPriceRange}
        setFilters={setFilters}
        filters={filters}
      />
    </View>
  );
};

export default Search;
