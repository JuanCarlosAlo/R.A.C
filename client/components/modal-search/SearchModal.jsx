import { Modal, Text, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { ALL_BRANDS } from "../../constants/allBrands";
import { ALL_FUEL_TYPES } from "../../constants/allFuelTypes";
import { ALL_CAR_TYPES } from "../../constants/allCarTypes";

const SearchModal = ({
  setModalVisible,
  modalVisible,
  priceRange,
  setPriceRange,
  handleApplyFilters,
  setFilters,
  filters,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={{ marginTop: 22 }}>
        <View>
          <Text>Selecciona las opciones de filtro:</Text>

          <Text>Rango de Precio: ${priceRange}</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={10000}
            step={100}
            defaultValue={priceRange}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value)}
          />
          <Picker
            selectedValue={filters.brand}
            onValueChange={(value) => setFilters({ ...filters, brand: value })}
          >
            <Picker.Item
              label="Elige una marca"
              value="brand"
              enabled={false}
            />
            <Picker.Item
              label="Todas las marcas"
              value=""
             
            />
            {ALL_BRANDS.map((brand) => (
              <Picker.Item
                label={brand.label}
                value={brand.value}
                key={brand._id}
              />
            ))}
          </Picker>
          <Picker
            selectedValue={filters.fuel}
            onValueChange={(value) => setFilters({ ...filters, fuel: value })}
          >
            <Picker.Item
              label="Elige un combustible"
              value="fuel"
              enabled={false}
            />
               {ALL_FUEL_TYPES.map((fuel) => (
              <Picker.Item
                label={fuel.label}
                value={fuel.value}
                key={fuel._id}
              />
            ))}
            
          </Picker>

          <Picker
            selectedValue={filters.type}
            onValueChange={(value) => setFilters({ ...filters, type: value })}
          >
            <Picker.Item
              label="Elige un tipo"
              value="type"
              enabled={false}
            />
               {ALL_CAR_TYPES.map((type) => (
              <Picker.Item
                label={type.label}
                value={type.value}
                key={type._id}
              />
            ))}
            
          </Picker>
          <TouchableOpacity onPress={handleApplyFilters}>
            <Text>Aplicar Filtros</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;
