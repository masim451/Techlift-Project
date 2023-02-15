var tech = require('express')
const mongoose = require('mongoose');
const myUser = require("./ProjectSchema")
var bodyParser = require('body-parser')
var cors=require("cors")

var app = tech();
const PORT = 4000;

//ok
// jsonParser
app.use(bodyParser.json())


app.use(cors())

//for connecting the database
mongoose.connect('mongodb://127.0.0.1:27017/TechliftProject', {
    useNewUrlParser: true
})

//for checking database connected
mongoose.connection.once("open", () => {
    console.log("Database connected!")
})


app.post('/create',( req , res ) =>{
    let user = myUser(req.body)
    user.save()
    .then((used)=>{
        res.send(used)

    })
    .catch((err)=>{
        console.log("api failed")
    })
});


app.get("/show", (req,res)=>{
    myUser.find()
    .then((showed)=>{
        res.send(showed)
    }).catch((err)=>{
        res.status(200).send(err.message)
    })
})

//update
app.put('/update/:id', (req, res) => {
    myUser.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json
      ({
        message: 'Object Update!'
    }))
      .catch(error => res.status(400).json({ error }));
  });


//delete
app.delete('/delete/:id', (req, res) => {
    myUser.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json
      ({ 
        message: 'Object Deleted!'
        }))
      .catch(error => res.status(400).json ({ error }));
  });

app.listen(PORT, () => {
    console.log(`Port is Connected http://localhost:${PORT}`)
})