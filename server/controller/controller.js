var userDB = require('../model/model');

//API to save student details 
exports.create=(req,res)=>{
    // check whether it is empty or not
    if(!req.body){
        res.status(400).send({message:" box can't be empty!!"})
        return;
    }

    //new user
    const student= new userDB({
        name:req.body.name,
        email:req.body.email,
        cgpa:req.body.CGPA,
        gender:req.body.gender
    })

    // save the new user
    student
    .save(student) // to save the data in mongodb
    .then(data =>{
       //console.log(data);
       res.redirect('/add-user');
    })
    .catch(err =>{
        res.status(500).send({message:err.message|| " error creating a new student details!!"})
    })


}

// To find the all student details / single user finder too
exports.find=(req,res)=>{
   
    if(req.query.id)// to get a single student user
    {
        const id = req.query.id;
        userDB.findById(id)
        .then(data=>{
            if(!data)
            {
                res.status(400).send({message:" id can't be found"})
            }
            else{
                res.send(data); 
            }
        })

     } else{ // to get all student details
        userDB.find()
        .then(student=>{
            res.send(student);
        })
        .catch(err=>{
            res.status(500).send({message:err.message|| " error getting student details!!"})
        })
    }

   
}

// update student details with id
exports.update=(req,res)=>{
    if(!req.body)
    {
        res.status(400).send({message:" box can't be empty!!"})
        return;
    }

    const id = req.params.id;
    userDB.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data)
            {
                res.status(400).send({message:" can't update this user"+ id +"is not found"});
            }
            else{
                res.send(data);
            }
    })
    .catch(err=>{
        res.status(500).send({message:err.message|| " error updating student details!!"})
    })    
}

//delete the student details with id
exports.delete=(req,res)=>{
    const id = req.params.id;

    userDB.findByIdAndDelete(id)
    .then(data=>{
        if(!data)
            {
                res.status(400).send({message:" can't delete the data id may be wrong"})
            }
            else{
                res.send({message:" Student data deleted successfully"})
            }
    })
    .catch(err=>{
        res.status(500).send({message:err.message|| " error deleting student details!!"})
    })

}