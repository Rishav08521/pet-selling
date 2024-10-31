// routes/petRoutes.js

const express = require('express');
const Pet = require('../models/Pet');
const router = express.Router();

// Get all pets
router.get('/', async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add a new pet (admin only)
router.post('/', async (req, res) => {
    const pet = new Pet(req.body);
    try {
        const savedPet = await pet.save();
        res.status(201).json(savedPet);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
