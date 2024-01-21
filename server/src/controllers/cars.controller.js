const { v4 } = require("uuid");
const CarsModel = require("../schemes/cars.scheme");
const controller = {};

controller.getAllCars = async (req, res) => {
  const allCars = await CarsModel.find();

  try {
    res.status(200).send(allCars);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getCarId = async (req, res) => {
  const autentifiedCar = await CarsModel.findById(req.params.id);

  try {
    res.status(200).send(autentifiedCar);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createCar = async (req, res) => {
  try {
    const { model, brand, fuel, type,img,price,year,doors,seats,power,engine,transmition,emissions } = req.body;
    const newId = v4();

    const newCar = await new CarsModel({
      _id: newId,
      model,
      brand,
      type,
      fuel,
      price,
      img,
      inSale:false,
      avaliable: true,
      details:{
            year,
            doors,
            seats,
            power,
            engine,
            transmition,
            fuel,
            emissions,
      }
    });

    const carExist = await CarsModel.findOne({ name });
    if (carExist) {
      return res.status(409).send({ error: "Car already exists" });
    }

    await newCar.save();

    return res.status(200).send({ message: "Car created successfully" });
  } catch (error) {
    return res.status(500).send({ error: "Error creating Car" });
  }
};

controller.editCar = async (req, res) => {
  try {
    const currentCar = await CarsModel.findById(req.params.id);
    await CarsModel.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    await currentCar.save();
    return res.status(200).send({ message: "Car updated successfully" });
  } catch {
    return res.status(500).send({ error: "Error" });
  }
};

controller.deleteCar = async (req, res) => {

  try {
    const carId = req.params.id;
    const currentCar = await CarsModel.findById(carId);
    await CarsModel.findByIdAndRemove(currentCar._id);
    await currentCar.markModified("._id");
    res.status(200).json({ message: "User elimanated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

module.exports = controller;
