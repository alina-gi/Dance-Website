const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ContactPage');
var db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open',function(){
});


const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:false
    }

})

const Contact = new mongoose.model('Contact', contactSchema);
module.exports = Contact;




// app.post('/contact' , (req , res)=>{
//     name = req.body.name
//     phone= req.body.phone
//     email= req.body.email
//     address = req.body.address
//     desc = req.body.desc
//     let outputToWrite = `The name of the client is${name},\nAge: ${phone} years,\nGender :${email},\nAddress: ${
//     address},\nMore: ${desc}`
//     fs.writeFileSync('put.txt', outputToWrite)

//     const param = {'message': 'Your form has been submitted'}
//     res.status(200).render('contact.pug' , param);
// })