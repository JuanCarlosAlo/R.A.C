import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import SearchBanner from "../../components/search-banner/SearchBanner";
import { Picker } from "@react-native-picker/picker";

const Search = () => {
  // Establece el estado inicial con el valor correspondiente al título
  const [selectedSortOrder, setSelectedSortOrder] = useState("title");

  const handleChangeSortOrder = (value) => {
    setSelectedSortOrder(value);
    // Aquí puedes realizar acciones adicionales según la opción seleccionada
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
          {/* boton que muestr un menu de filtros */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
