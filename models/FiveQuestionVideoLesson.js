const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Title, Link to Video, Questions, Answers, Pause Time, ID for Question
let FiveQVLSchema = new Schema({
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
  //QUESTION 1//////////////////////////////////////////////////////////////////////////////////////////////////
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
  //QUESTION 2//////////////////////////////////////////////////////////////////////////////////////////////////

  // question2PauseTime: {
  //   type: Number,
  //   required: true,
  //   trim: true
  // },

  // question2: {
  //   type: String,
  //   required: true,
  //   // unique: true,
  //   trim: true
  //   // lowercase: true,
  //   // index: {
  //   //   unique: true
  //   // }
  // },
  // question2AnswerA: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  
  // question2AnswerB: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question2AnswerC: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question2AnswerD: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question2CorrectAnswer: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // //QUESTION 3//////////////////////////////////////////////////////////////////////////////////////////////////
  // question3PauseTime: {
  //   type: Number,
  //   required: true,
  //   trim: true
  // },

  // question3: {
  //   type: String,
  //   required: true,
  //   // unique: true,
  //   trim: true
  //   // lowercase: true,
  //   // index: {
  //   //   unique: true
  //   // }
  // },
  // question3AnswerA: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  
  // question3AnswerB: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question3AnswerC: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question3AnswerD: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question3CorrectAnswer: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // //QUESTION 4//////////////////////////////////////////////////////////////////////////////////////////////////
  // question4PauseTime: {
  //   type: Number,
  //   required: true,
  //   trim: true
  // },

  // question4: {
  //   type: String,
  //   required: true,
  //   // unique: true,
  //   trim: true
  //   // lowercase: true,
  //   // index: {
  //   //   unique: true
  //   // }
  // },
  // question4AnswerA: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  
  // question4AnswerB: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question4AnswerC: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question4AnswerD: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question4CorrectAnswer: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  
  // //QUESTION 5//////////////////////////////////////////////////////////////////////////////////////////////////
  // question5PauseTime: {
  //   type: Number,
  //   required: true,
  //   trim: true
  // },

  // question5: {
  //   type: String,
  //   required: true,
  //   // unique: true,
  //   trim: true
  //   // lowercase: true,
  //   // index: {
  //   //   unique: true
  //   // }
  // },
  // question5AnswerA: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  
  // question5AnswerB: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question5AnswerC: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question5AnswerD: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  // question5CorrectAnswer: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('FiveQuestionVideoLesson', FiveQVLSchema);