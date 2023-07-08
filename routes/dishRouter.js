const express = require('express');
const router = express.Router();
const Dish = require('../model/dishSchema');


router.post('/', async (req, res) => {
    console.log("post req working");
    const dishData = new Dish(req.body);
    
    try {
        const result = await dishData.save();
        res.send(result);

    } catch (error) {
        res.send(error);
        
    }
});

router.get('/', async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }

});

router.get(('/:dishId'), async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.dishId);
        res.json(dish);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
        console.log(res.statusCode);
    }
});



router.delete(('/:dishId'), async (req, res) => {
    try {
        const deleteDish = await Dish.findByIdAndDelete(req.params.dishId);
        res.send("Dish deleted....");
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.put('/:dishId', async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.dishId);
        dish.name = req.body.name;
        dish.price = req.body.price;
        const updateDish = await dish.save();
        res.json(updateDish);
    }
    catch (err) {
        res.status(500).send({ message: error.message });
        console.log(res.statusCode);
    }
});


module.exports = router;

