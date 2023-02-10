import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({
    'name': String,
    'email': String,
    'phone': String,
    'message': String
}, { timestamps: true });

const contactUs = mongoose.models.contactus || mongoose.model('contactus', contactUsSchema);

export default contactUs;