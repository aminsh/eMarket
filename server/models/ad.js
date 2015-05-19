var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var adSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    des: String,
    category: {
        _id: String,
        title: String
    },
    phone: String,
    email: String
});

module.exports = mongoose.model('ad', adSchema);
