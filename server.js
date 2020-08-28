

const express = require('express');

const bodyParser = require('body-parser');

const {User} = require('./models/user');
const {mongoose} = require('./db/mongoose');



const app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded( {extended:false}  ));



app.post('/add' , (req , res)=>{

   

    var user = req.body;

    var us = new User(user);

    us.save().then(

        (savedUser)=>{

            res.send(savedUser);

        },

        (err)=>{
            console.log(err);
        }

    );



});



app.get('/getall' , (req, res)=>{

    
    User.find({}).then(

        (allUsers)=>{

            res.send(allUsers);
        } ,

        (err)=>{

            console.log(err);
        }


    );
});


app.get('/get' , (req , res)=>{

    User.find({nom: '3ezdin'}).then(
        (users)=>{
            res.send(users);
        },

        (err)=>{
            console.log(err);
        }
    );


});




app.get('/getone/:id' , (req, res)=>{

var id = req.params.id;


    User.findOne({_id: id}).then(
        (user)=>{
            res.send(user);
        },

        (err)=>{
            console.log(err);
        }


    );


});



app.delete('/delete/:id' , (req , res)=>{

   
    var id = req.params.id;

    User.findByIdAndRemove({_id: id}).then(

        ()=>{
            res.send('deleted !!');

        }
        ,
        (err)=>{
            console.log(err);
        }
    );



});




app.put('/update/:id' , (req, res)=>{

    var id = req.params.id;

    var n = req.body.nom;
    var p = req.body.prenom;
    var a = req.body.age;



    User.findByIdAndUpdate({_id: id} , {$set : {nom: n, prenom: p, age: a  }  }).then(

        ()=>{
           res.send('updateddddd')
        }
        ,
        (err)=>{
            console.log(err);
        }

    );




});






app.listen(3000 ,  

    ()=>{
        console.log('server work !!');
    }
    
    );



