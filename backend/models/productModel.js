import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    size: { type: String, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }

})
// keep run one times, when the productmodel is sustain, will use the former one.
const productModel = mongoose.models.product || mongoose.model("product", productSchema)

export default productModel