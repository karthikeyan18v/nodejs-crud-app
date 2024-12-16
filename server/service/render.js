const axios = require('axios')

exports.homeRoutes=(req,res)=>{   // render the index user page
    axios.get('http://localhost:8080/api/student') // when the submit click this api work in background
     .then(function(response){
        res.render('index',{users:response.data});  // send a data to front end

     })
     
     .catch(err=>{
        res.send(err);
     })
   
}

exports.addUserRoutes=(req,res)=>{   // render the add user page
    res.render('add_user');
}

exports.updateUserRoutes=(req,res)=>{    // render the update user page
    axios.get('http://localhost:8080/api/student',{params : {id:req.query.id}})  // after submit click api url will run bg with id 
    .then(function(userdata){
        res.render('update_user',{users: userdata.data})
    })
    .catch(err=>{
        res.send(err);
     })
}