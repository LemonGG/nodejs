var mongodb = require('mongodb')

var server = new mongodb.Server('localhost',27017,{auto_reconnect:true})

var db = new mongodb.Db('20151109',server,{safe:true})


db.open(function(err,db){
	if(!err){
		console.log('connect db')

		db.createCollection('20151109',{safe:true},function(err,collection){
			if(err){
				console.log(err)
			}else{
				
				// add 
				// var _data = {name:'leo',state:'sleep'}
				// collection.insert(_data,{safe:true},function(err,result){
				// 	console.log(result)
				// })
				
				// update / modify
				// collection.update({name:'leo'},{$set:{name:'Leo'}},{safe:true},function(err,result){
				// 	if(err){
				// 		console.log(err)
				// 	}else{
				// 		console.log(result)
				// 	}
				// })

				// delete
				// collection.remove({name:'Leo'},{safe:true},function(err,result){
				// 	console.log(result)
				// })

				// find all
				// collection.find().toArray(function(err,docs){
				// 	console.log('find')
				// 	console.log(docs)
				// })

				//find one
				collection.findOne({name:'serio'},function(err,result){
					console.log('findOne')
					console.log(result)
				})
				


			}
		})

		// delete collection
		db.dropCollection('20151109',{safe:true},function(err,result){
			if(err){
				console.log(err)
			}else{
				console.log('delete collection')
				console.log(result)
			}
		})
	}else{
		console.log(err)
	}
})