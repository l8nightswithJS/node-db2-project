const express = require('express');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
      res.json(cars); 
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
  });

router.post('/', (req, res) => {
    const newCar = req.body;

    db('cars').insert(newCar)
    .then(car => {
        res.status(200).json({car: `new car created with id:${car}`});
        console.log(car);
        
    });
    
})

router.put('/', (req, res) => {
    const {id} = req.query;
    const updatedCar = req.body;

    db('cars')
    .where({id})
    .update(updatedCar)
        .then((newCar) => {
            if(newCar){
                res.status(200).json({updated: `updated car success:${newCar}`})
                console.log(newCar);
                
            } else res.status(404).json({err: "id not found"})
        })
        .catch(err => {
            res.status(500).json({err})
        });
});

router.delete('/', (req, res) => {
    const {id} = req.query;
    
    db('cars')
    .where({id})
    .del()
        .then(dCar => {
            if(dCar){res.status(200).json({Deleted: `deleted id:${id}`})
            } else res.status(404).json({err: "id not found"})
        })
        .catch(err => {res.status(500).json(err)})
})


module.exports = router;