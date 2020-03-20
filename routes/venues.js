const express = require('express');
const router = express.Router();
const {upload} = require('../routes/upload')
const {venueSchema,validateVenue} = require('../models/venueinfo')
const mongoose = require('mongoose')
require('../models/User');
const User = mongoose.model('users');

const {ensureAuthenticated} = require('../helpers/auth')


router.get('/venues',ensureAuthenticated,async (req, res) => {
    let users = await User.findById(req.user._id).populate('createdVenues')
    res.send(users)
});




  router.post('/upload',ensureAuthenticated, (req, res) => {
 upload(req, res, (err) =>  {
      if(err){
          console.log(err)
      } else {
        if(req.file == undefined){
           res.send('image uploaded is not correct')      
        } else {   
         
               
           const file =  `uploads/${req.file.filename}`
           const validateschema = {
            venueName:req.body.venuename,
            venueType:req.body.venuetype,
            numberOfPeople:req.body.venuenumber,
            venueAddress:req.body.venueaddress,
            venueAddress2:req.body.venueaddress2,
            venueNeighborhood:req.body.venueneighborhood,
            venueCountry:req.body.venuecountry,
            venueCity:req.body.venuecity,
            venuePostCode:req.body.venuepostcode,
            venueNearest:req.body.venuenearest,
            venueDescription:req.body.venuedescription,
           image:file            
           // req.body,file
          }
           
           const {error} = validateVenue(validateschema)
             if(error) return res.status(400).send(error.details[0].message)
          const venue = new venueSchema ({
              venueName:req.body.venuename,
             venueType:req.body.venuetype,
             numberOfPeople:req.body.venuenumber,
             venueAddress:req.body.venueaddress,
             venueAddress2:req.body.venueaddress2,
             venueNeighborhood:req.body.venueneighborhood,
             venueCountry:req.body.venuecountry,
             venueCity:req.body.venuecity,
             venuePostCode:req.body.venuepostcode,
            venueNearest:req.body.venuenearest,
            venueDescription:req.body.venuedescription,
            createdUser:req.user._id,
            image:file
          })
          const userid = req.user._id
         

          async function savedata(){
            try {
              let user = await User.findById(userid)
              user.createdVenues.push(venue)
              await user.save()
              await venue.save()
              console.log(user)
             res.send(user)
            } catch (error) {
              console.log(error.message)
            }
          }

          savedata()

            
          }
        
      }
    });
    
  });




module.exports = router;