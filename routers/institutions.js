const {Institution} = require('../models/institution');
const express = require('express');
const router = express.Router();
  
router.get(`/`, async(req,res) =>{
    const institutionList = await Institution.find();
  
    if(!institutionList) {
      res.status(500).json({success: false})
    }
    res.send(institutionList);
})

router.post(`/`, (req,res) =>{
    const institution = new Institution({
        codeId: req.body.Number,
        name: req.body.String,
        address: req.body.String,
        email: req.body.String,
        telephone: req.body.String
})
  
institution.save().then((createdInstitution=> {
      res.status(201).json(createdInstitution)
})).catch((err) => {
    res.status(500).json({
        error: err,
        success: false
    })
})
    res.send(institution);
});
  
module.exports = router;