var mongoose = require("mongoose");

var ItemSchema = new mongoose.Schema({
    name: String,
    value: String
});

mongoose.model("Item", ItemSchema);