const express = require('express');
const route = express.Router();

const controller = require('../controller/controller')

const services = require('../service/render')
  //get method route for home page
  route.get('/',services.homeRoutes);

  //get method route for addUser page
  route.get('/add-user',services.addUserRoutes);
  
  //get method route for updateUser page
  route.get('/update-user',services.updateUserRoutes);


  // API

  route.post('/api/student',controller.create)  // to create a user
  route.get('/api/student',controller.find)     // to find a user // to find single user add id 
  route.put('/api/student/:id',controller.update) // to update a user
  route.delete('/api/student/:id',controller.delete); // to delete the user

  module.exports=route;