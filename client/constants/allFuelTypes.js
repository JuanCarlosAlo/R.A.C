import { v4 as uuidv4 } from "uuid";

export const ALL_FUEL_TYPES = [
    {
        _id: uuidv4(),
        label: "Gasolina",
        value: "petrol",
    },
    {
        _id: uuidv4(),
        label: "Diesel",
        value: "diesel",
    },
    {
        _id: uuidv4(),
        label: "Hibrido",
        value: "hibrid",
    },
    {
        _id: uuidv4(),
        label: "Electrico",
        value: "electric",
    }
]