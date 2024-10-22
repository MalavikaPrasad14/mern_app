const express = require('express');
const jwt=require('jsonwebtoken')
const router = express.Router();


const eModel = require('../model/employeedata');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

function verifyToken(req,res,next){
    let token=req.headers.token;
    try {
        if(!token) throw "Unauthorized Access"
        let payload=jwt.verify(token,"secret")
        if(!payload) throw  "Unauthorized Access"
        next()

    } catch (error) {
        res.json({message:error})
    }
}
// update document

// GET OPERATION
router.get('/',verifyToken,async (req, res) => {
    try {
        const data = await cModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('Data not found');
    }

})



// POST OPERATION

router.post('/addnew',verifyToken, async (req, res) => {
    console.log(req.body)
    try {
        const data = await eModel.create(req.body);
        // console.log(data)
        res.status(200).send('Post successful');


    } catch (error) {
        res.status(400).send('Post Unsuccessful');
    }
});

// put operation
router.put('/edit/:id',verifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await eModel.findByIdAndUpdate(id, req.body);

        res.status(200).send('Update successful');

    } catch (error) {
        res.status(404).send('Update unsuccessful');

    }
});

//delete op

router.delete('/delete/:id',verifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await eModel.findByIdAndDelete(id, req.body);
        res.status(200).send('delete successful');

    } catch (error) {
        res.status(404).send('delete unsuccessful');

    }
});




module.exports = router;
