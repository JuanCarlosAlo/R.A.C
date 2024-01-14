const express = require('express');
const carsRoutes = express.Router();
const controller = require('../controllers/cars.controller'); 

carsRoutes.get('/all-cars', controller.getAllCars);
carsRoutes.get('/carById/:id', controller.getCarId);
carsRoutes.post('/edit-car/:id', controller.editCar);
carsRoutes.post('/create-car/:id', controller.createCar);
carsRoutes.delete('/delete-car/:id', controller.deleteCar);

module.exports = carsRoutes;
