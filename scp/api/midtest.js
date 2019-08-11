const express = require('express');
const router = express.Router();
const personnel = require('../personnel');
//Upon a GET request, send user back to main page.
router.get('/',(req,res)=>{
res.redirect('/');
});

router.post('/',(req,res)=>{
    
    const found = personnel.some(personnel => personnel.id === parseInt(req.body.person));
    if(found){
        var usr=personnel.filter(personnel => personnel.id === parseInt(req.body.person));
        req.app.locals.user= usr[0];
        res.redirect('/');
    }
    else{
        res.send('Failed to Find the Employee-Post')
    }
    });

module.exports = router;