import { v4 as uuidv4 } from "uuid";

export const ALL_CAR_TYPES = [
    {
        _id: uuidv4(),
        label: "Compacto",
        value: "compact",
    },
    {
        _id: uuidv4(),
        label: "SUV",
        value: "suv",
    },
    {
        _id: uuidv4(),
        label: "Sedan",
        value: "sedan",
    },
    {
        _id: uuidv4(),
        label: "Deportivo",
        value: "sporty",
    }
]