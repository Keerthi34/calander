var express = require('express');
var router = express.Router();
var winston = require('winston');
var Cal= require('../models/cal');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Calander*/
router.post('/calender', function(req,res,next){
  var t= new Cal({
    title:req.body.title,
    start:req.body.start,
    end:req.body.end

  })


    t.save(function(err,suc){
      if(err)
      res.send(err)
      else
      return res.status(201).send({"Message":"Created", type:"internal"});
  })

})


/*Get all details*/
router.get('/cal', function(req, res, next) {
  winston.log('info',"Info: Get all class records")
  console.log("info");
  Cal.find({},function(err,data){
      if(err)
      res.status(500).send(err);
      else {
        res.status(200).json(data);
      }
  })
});

module.exports = router;
