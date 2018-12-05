const valid = require('../models/Dogs');
const express = require('express');
const db = require('../db')
const router = express.Router();


        //INSERT A DOG
router.post('/', async (req,res)=>{
    try {
        const {error} = valid.validateDogs(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        let insertData = req.body;
        let values = [];
            values.push([insertData.fldName, insertData.fldBreed, insertData.fldAge, insertData.fldDescription, insertData.fldPhoto]);
       const added = await db.insertDog(values);
       res.send(added);
        console.log(added);
    }catch (e) {
        console.log('ERROR', e.message);
    }
});

        //GET DOG BY ID
router.get('/:id', async (req, res) => {
    try {
        const name = await db.queryDogbyId(req.params.id);
        res.send(name)
    } catch (e) {
        console.log('ERROR', e.message);
    }
});

    //UPDATE DOG BY ID
router.put('/:id', async (req, res) => {
    try {
        //GET BY ID
        const getDogs = await db.queryDogbyId(req.params.id);
         const id =getDogs[0].pmkDogs;
         console.log(id);


        //UPDATE BY ID
//validate user input
        const {error} = valid.validateDogs(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        let updateData = req.body;
        let values = [];
        values.push([updateData.fldName, updateData.fldBreed, updateData.fldAge, updateData.fldDescription, updateData.fldPhoto]);
        const added = await db.updateDog(req.body,id);
        res.send(added);
    } catch (e) {
        console.log('ERROR', e.message);
    }
});



module.exports = router;