const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express();
const port = 80;
// express stuff
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded({extended:true}))
// pug stuff
app.set('view engine', 'pug') // set template engine pug
app.set('views',path.join(__dirname,'views')) // set the views directory
// endpoints
app.get('/',(req,res)=>{
    const con = "best content for gamers"
    const params = {'title' : "god of war is best game series", 'content':con};
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
    name =req.body.name;
    age =req.body.age;
    gender =req.body.gender;
    address =req.body.address;
    more =req.body.more;
    let outputfile =`Name of client is ${name} ${age} years old,${gender} lives in ${address}. more info ${more}`;
    fs.writeFileSync('output.txt',outputfile);
    console.log(req.body);
    const params= {'title' : 'Your form has been submitted successfully' }
    res.status(200).render('index.pug',params);
})
// Start server
app.listen(port,  ()=>{
    console.log(`applicatin started succesfully on port ${port}`);
})

