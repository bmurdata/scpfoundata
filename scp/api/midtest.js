const express = require('express');
const router = express.Router();
const personnel = require('../personnel');

router.get('/',(req,res)=>{
res.redirect('/');
});

router.post('/',(req,res)=>{

    console.log('Post test');
    
    const found = personnel.some(personnel => personnel.id === parseInt(req.body.person));
    if(found){
        console.log('Post Found');
        var usr=personnel.filter(personnel => personnel.id === parseInt(req.body.person));
        req.app.locals.user= usr[0];
        res.redirect('/');
    }
    else{
        res.send('Failed to Find the Employee-Post')
    }
    });

//Quick Note- Only works with /api/midtest/Value, NOT api/midtest?person=3. Must fix.
//REASON: req.params only for parameters.
router.get('/:person',(req,res)=>{
   /* console.log('accessing get for user');
    console.log(req.params.person);
    const found = personnel.some(personnel => personnel.id === parseInt(req.params.person));
if(found){
    user=res.json(personnel.filter(personnel => personnel.id === parseInt(req.params.person)));
    res.send(user);
}
res.send('Testing');*/
});

module.exports = router;