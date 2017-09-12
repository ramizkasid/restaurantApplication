var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Categories = new Schema({
  name: String,
  // subcategory: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'subcategory'
  //   }
  // subcategory:[String]
});

var Category = module.exports = mongoose.model('category', Categories);

module.exports.getCategories = function(callback, limit){
	Category.find(callback).limit(limit);
}
