var express = require('express');
var app = express();

var port = 3001;

app.use(express.static(__dirname + '/'));
app.listen(port);
console.log('Server started at' + port);

app.post('/api/login', function(req, res) {
	var results = [{
	    title: "BE",
	    program: ["<br>1.Computer Science and Engineering<br>2.Information Technology Engineering<br>3.Electronics and Telecommunication Engineering<br>4.Electronics and Instrumentation Engineering<br>5.Mechanical Engineering<br>6.Civil Engineering"]
    },{
	    title: "ME",
	    program: ["<br>1.Computer Engineering with specialization in Software Engineering<br>2.Information Technology with specialization in Information Security<br>3.Electronics engineering with specialization in Digital Instrumentation<br>4.Electronics engineering with specialization in Digital Communication<br>5.Industrial Engineering & Management<br>6.Mechanical Engineering with specialization in Design & Thermal  Engineering"]
    },{
    	title: "Msc",
    	program: ["<br>1.Applied Mathematics with specialization in Computing & Informatics"]
    },{
    	title: "Doctoral",
    	program: ["<br>PhD programme is also offered in all disciplines of BE/ME Programmes & all relevant areas of interest. Research component of IET is also strong while a number of research scholars from other reputed organizations such as SGSITS, AICTE, RRCAT, NRCS, IIITA, etc. have registered for PhD programme in various departments of IET."]
    }];

	res.json(results);
}) 