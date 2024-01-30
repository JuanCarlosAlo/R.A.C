import { Picker } from "@react-native-picker/picker"

const FilterPicker = ({ array, setFilters, valueKey, state }) => {
    return <Picker
        selectedValue={state.filters[valueKey]}
        onValueChange={(value) => setFilters({ ...state.filters, [valueKey]: value })}
    >

        {array.map((item, index) => (
            <Picker.Item
                label={item.label}
                value={item.value}
                key={item._id}
                enabled={index === 0 ? false : true}
            />
        ))}
    </Picker>
}

export default FilterPicker