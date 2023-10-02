const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('Index', {title:'Home'})
})

router.get('/About',(req,res,next)=>{
    res.render('About', {title:'About'})
})

router.get('/Contact',(req,res,next)=>{
    res.render('Contact', {title:'Contact Us'})
})

router.get('/Services',(req,res,next)=>{
    res.render('Services', {title:'Services'})
})

router.get('/Projects',(req,res,next)=>{
    res.render('Projects', {title:'Projects'})
})

module.exports = router;