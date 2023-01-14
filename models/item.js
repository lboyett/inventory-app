const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
    name: {type: String, required: true},
    description: {type: String,},
    category: {type: Schema.Types.ObjectId, ref: "Category", required: true,},
    price: {type: Number, required: true,},
    numInStock: {type: Number, required: true,},
})

ItemSchema.virtual("url").get(function () {
    return `/catalog/category/${this.id}`
})