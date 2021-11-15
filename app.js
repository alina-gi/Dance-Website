const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();  
const port = 80;
const Contact = require("./contact.js")



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'templates')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
// ----------------SAVEDATA IN MONGODB---------------//
app.post('/contact', async (req, res)=>{
    try {
        const contact = new Contact({
            name: req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            address:req.body.address,
            desc:req.body.desc
        })
          const saveCon = await contact.save();
          res.status(201).render('contact.pug');
    } catch (error) {
        res.status(400).send(error);
    }
    res.status(200).render('contact.pug');
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});