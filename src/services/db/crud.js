const { getCollection } = require('./connection');
//lien utile : https://www.mongodb.com/docs/drivers/node/current/usage-examples/

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
async function find(collectionName, query, options = {}){
    try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.findOne(query, options);

		if ((await collection.countDocuments()) === 0) {
			console.log("Aucun document !");
		  }
		  // Afficher les documents trouver
		  for await (const doc of result) {
			console.dir(doc);
		  }
		} finally {
		  await client.close();
	}
}

// fonction insertOne
async function insertOne(collectionName, query, options = {}){
	try {
		const  collection = getCollection(collectionName);
		
		const doc = {
		  title: "Record of a Shriveled Datum",
		  content: "No bytes, no problem. Just insert a document, in MongoDB",
		}

		const  result = await  collection.insertOne(doc);
		console.log(`A document was inserted with the _id: ${result.insertedId}`);
	  } finally {
		await client.close();
	  }

}

// fonction insertMany
async function insertMany(collectionName, query, options = {}){
	try {
		const  collection = getCollection(collectionName);
		
		const docs = [
		  { name: "cake", healthy: false },
		  { name: "lettuce", healthy: true },
		  { name: "donut", healthy: false }
		];
		const result = await collection.insertMany(docs, options);
		console.log(`${result.insertedCount} documents were inserted`);
	  } finally {
		await client.close();
	  }
}

// fonction updateOne
async function updateOne(collectionName, query, options = {}){
	try {
		const  collection = getCollection(collectionName);
		const filter = { title: "Random Harvest" };
		const options = { upsert: true };
		const updateDoc = {
		  $set: {
			plot: `A harvest of random numbers, such as: ${Math.random()}`
		  },
		};
		const result = await collection.updateOne(filter, updateDoc, options);
		console.log(
		  `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
		);
	  } finally {
		await client.close();
	  }
}

// fonction updateMany
async function updateMany(collectionName, query, options = {}){
	try {
		const  collection = getCollection(collectionName);
		const filter = { rated: "G" };
		const updateDoc = {
		  $set: {
			random_review: `After viewing I am ${
			  100 * Math.random()
			}% more satisfied with life.`,
		  },
		};
		const result = await collection.updateMany(filter, updateDoc);
		console.log(`Updated ${result.modifiedCount} documents`);
	  } finally {
		await client.close();
	  }
}

// fonction replace
async function replace(collectionName, query, options = {}){
	try {
		const  collection = getCollection(collectionName);
		const query = { title: { $regex: "The Cat from" } };
		const replacement = {
		  title: `The Cat from Sector ${Math.floor(Math.random() * 1000) + 1}`,
		};
		const result = await collection.replaceOne(query, replacement);
		console.log(`Modified ${result.modifiedCount} document(s)`);
	  } finally {
		await client.close();
	  }
}

// fonction deleteOne
async function deleteOne(collectionName, query, options = {}){
	try {
		const  collection = getCollection(collectionName);
		const query = { title: "Annie Hall" };
		const result = await collection.deleteOne(query);
		if (result.deletedCount === 1) {
		  console.log("Successfully deleted one document.");
		} else {
		  console.log("No documents matched the query. Deleted 0 documents.");
		}
	  } finally {
		await client.close();
	  }
}

// fonction deleteMany
async function deleteMany(collectionName, query, options = {}){
	try {
		const  collection = getCollection(collectionName);
		const query = { title: { $regex: "Santa" } };
		const result = await collection.deleteMany(query);
		console.log("Deleted " + result.deletedCount + " documents");
	  } finally {
		await client.close();
	  }
}

// les éléments exporter
module.exports = {
    findOne,
	find,
	insertOne,
	insertMany,
	updateOne,
	updateMany,
	replace,
	deleteOne,
	deleteMany,
};