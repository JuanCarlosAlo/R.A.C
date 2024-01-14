const mongoose = require("mongoose");

const CarsScheme = mongoose.Schema(
    {
        _id: String,
        name: String,
        brand: String,
        type: String,
        fuel: String,
        img: String,
        avaliable: Boolean,

    },
    {
        collection: "cars",
    }
);

const CarsModel = mongoose.model("cars", CarsScheme);

module.exports = CarsModel;
