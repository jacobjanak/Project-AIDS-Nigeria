const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Title, Link to Video, Questions, Answers, Pause Time, ID for Question
let CurrSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  linkToVideo: {
    type: String,
    required: true,
    trim: true
  },
  id: {
    type: Number,
    required: true,
    trim: true
  },
  
  question1PauseTime: {
    type: Number,
    required: true,
    trim: true
  },

  question1: {
    type: String,
    required: true,
    // unique: true,
    trim: true
    // lowercase: true,
    // index: {
    //   unique: true
    // }
  },
  question1AnswerA: {
    type: String,
    required: true,
    trim: true
  },
  
  question1AnswerB: {
    type: String,
    required: true,
    trim: true
  },

  question1AnswerC: {
    type: String,
    required: true,
    trim: true
  },

  question1AnswerD: {
    type: String,
    required: true,
    trim: true
  },

  question1CorrectAnswer: {
    type: String,
    required: true,
    trim: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Curriculum', CurrSchema);