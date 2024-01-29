const { getCollection } = require('./connection');

// fonction findOne
async  function  findOne(collectionName, query, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.findOne(query, options);
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

// fonction find
async function find(){
    
}

// fonction insertOne
async function insertOne(){

}

// fonction insertMany
async function insertMany(){

}

// fonction updateOne
async function updateOne(){

}

// fonction replace
async function replace(){

}

// fonction deleteOne
async function deleteOne(){

}

// fonction deleteMany
async function deleteMany(){

}