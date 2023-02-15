const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	name:{
		type:String
	},
	description:{
		type:String
	},
	activity:{
		type:String
	},
	duration:{
		type:String
		
	},
	date:{
		type:Date
	}
})
const User = mongoose.model("Exercise Activity",userSchema)
module.exports = User;