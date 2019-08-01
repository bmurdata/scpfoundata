const express = require('express');
const router = express.Router();
const personnel = require('../personnel');
//attempt to use api to change logged in user- no success. 
router.get('/:id',(req,res)=>{
    console.log('accessing get for user');
    const selecteduser = personnel.some(personnel => personnel.id === parseInt(req.params.id))
user=personnel[selecteduser]

});

module.exports = router;