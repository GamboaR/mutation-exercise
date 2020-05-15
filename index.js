const express = require('express');
const bodyParser = require('body-parser');

const exer = require('./exercise');

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.post('/mutation', function(req, res){
	if(req.body.dna){
		var hasmut = exer.hasMutation(req.body.dna);
		if(hasmut) res.sendStatus(200);
		 else res.sendStatus(403);

	}else {
		res.sendStatus(403)
	}

	console.log(req.body)

//hasMutation(["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"])

})
app.listen(3000, () => {
	console.log('Server up')
})