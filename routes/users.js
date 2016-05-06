var express = require('express');
var uuid = require('node-uuid');//###################### for rendom no.
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res){
	var name,salary,dept,id;

	var empData={
		id : uuid.v1(),
		name:req.body.name,
		salary : req.body.salary,
		dept : req.body.dept	
	}

	var empKey = 'emp:' + empData.id;
	redisClient.hmset(empKey, empData, function(err, reply) {
		if(err){
			console.log("Error occured :"+err);
		}else{
			console.log("Emp saved Successfully");
			res.send("data save Successfully");
		}
	});
});

module.exports = router;
