// init mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//test schema for inserting project zip files for users
// create a mongoose model and add it to exports
module.exports = mongoose.model('Project', new Schema({
  id: {type: Number, index: true},
  title: String,
  data: Buffer,
  stateTree: Object,
  components: Object,
}));
