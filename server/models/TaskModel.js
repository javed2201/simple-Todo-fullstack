const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    taskName: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
    }, 
    projectedTime: {
        type: String,
    }, 
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }, 
    importance: {
        type: String,
        enum: ['high', 'medium', 'low'],
        default: 'medium' 
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('TodoTask', TaskSchema)