const express = require('express');
const router = express.Router();
const {upload} = require('../routes/upload')
const {venueSchema,validateVenue} = require('../models/venueinfo')

router.get('/venues', (req, res) => {
    res.render('venues/venues');
});



var upld =  function(req,res) {
  
}



  router.post('/upload',async (req, res) => {
   upload(req, res, (err) =>  {
      if(err){
          console.log(err)
      } else {
        if(req.file == undefined){
            console.log('undef')      
        } else {   
               
           const file =  `uploads/${req.file.filename}`
          const venue = new venueSchema ({
            venueName:req.body.venuename,
            venueType:req.body.venuetype,
            image:file
          })
          venue.save().then(resp => res.send(resp) ).catch(error => console.log(error))
        }
      }
    });
    
  });




module.exports = router;