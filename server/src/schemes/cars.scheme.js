const mongoose = require("mongoose");

const CarsScheme = mongoose.Schema(
    {
        _id: String,
        model: String,
        brand: String,
        type: String,
        fuel: String,
        price: Number,
        inSale: Boolean,
        img: String,
        avaliable: Boolean,
        details: {
            year: Number,
            doors: Number,
            seats: Number,
            power: Number,
            engine: String,
            transmition: String,
            fuel: String,
            emissions: String,
        }

    },
    {
        collection: "cars",
    }
);

const CarsModel = mongoose.model("cars", CarsScheme);

module.exports = CarsModel;
