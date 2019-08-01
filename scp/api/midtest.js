const express = require('express');
const router = express.Router();
const personnel = require('../personnel');
//attempt to use api to change logged in user- no success. 
router.get('/',(req,res)=>{

console.log('Test of Get');
res.send('test Passed');
console.log(req.body);
const selecteduser = personnel.some(personnel => personnel.id === parseInt(req.params.person));
user=personnel[selecteduser];
});
//Quick Note- Only works with /api/midtest/Value, NOT api/midtest?person=3. Must fix.
router.get('/:person',(req,res)=>{
    console.log('accessing get for user');
    const selecteduser = personnel.some(personnel => personnel.id === parseInt(req.params.person));
user=selecteduser;
console.log(user);
res.send('Testing');
});

module.exports = router;