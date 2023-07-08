const express = require('express');
const router = express.Router();
const Leader = require('../model/leaderSchema');


// get all leader data 
router.get('/', async (req, res) => {
    try {
        const leaders = await Leader.find();
        res.json(leaders);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }

});


// get leader data from id 
router.get(('/:leaderId'), async (req, res) => {
    try {
        const leader = await Leader.findById(req.params.leaderId);
        res.json(leader);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
        console.log(res.statusCode);
    }
});

// post data
router.post('/', async (req, res) => {
   
    


    

    // const leaderData = new Leader({
    //     name: req.body.name,
    //     designation: req.body.designation,
    //     age: req.body.age
    // });
    const leaderData = await Leader.c(req.body)
    res.status(200).json({ leaderData });

    

    //     try {
    //         console.log("leader post req working");

    //         // const leaderData = await Leader.create(req.body)
    //         // res.status(200).json({ leaderData });


    //         // const postLeader = await leaderData.save();
    //         // res.json(postLeader);
    //         // console.log(res.statusCode);
    //     }
    //     catch (error) {
    //         res.status(500).send({ message: error.message });
    //         console.log(res.statusCode);
    //     }
     });


    

router.delete(('/:leaderId'), async (req, res) => {
    try {
        const deleteLeader = await Leader.findByIdAndDelete(req.params.leaderId);
        res.send("Leader deleted....");
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});


router.put('/:leaderId', async (req, res) => {
    try {
        const leader = await Leader.findById(req.params.leaderId);
        leader.name = req.body.name;
        leader.designation = req.body.designation;
        leader.age = req.body.age;
        const updateLeader = await leader.save();
        res.json(updateLeader);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
        console.log(res.statusCode);
    }
});


module.exports = router;