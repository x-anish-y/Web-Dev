import mongoose from "mongoose";

const employees = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

export const employee = mongoose.model('employees', employees)