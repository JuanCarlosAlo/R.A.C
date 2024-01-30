import { v4 as uuidv4 } from "uuid";
import { ALL_BRANDS } from "./allBrands";

export const ALL_FUEL_TYPES = [
    {
        _id: uuidv4(),
        label: "Elige un combustible",
        value: "fuel"
    },
    {
        _id: uuidv4(),
        label: "Todos los combustibles",
        value: "",

    },
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


export const ALL_CAR_TYPES = [
    {
        _id: uuidv4(),
        label: "Elige un tipo",
        value: "type"
    },
    {
        _id: uuidv4(),
        label: "Todos los tipos",
        value: "",

    },
    {
        _id: uuidv4(),
        label: "Compacto",
        value: "Compact",
    },
    {
        _id: uuidv4(),
        label: "SUV",
        value: "SUV",
    },
    {
        _id: uuidv4(),
        label: "Sedan",
        value: "Sedan",
    },
    {
        _id: uuidv4(),
        label: "Deportivo",
        value: "Sporty",
    }
]

export const ALL_CAR_BRANDS = [
    {
        _id: uuidv4(),
        label: "Elige una marca",
        value: "brand",

    },
    {
        _id: uuidv4(),
        label: "Todas las marcas",
        value: "",

    },
    ...ALL_BRANDS,
]