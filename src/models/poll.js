const mongoose = require('mongoose')
// const validator = require('validator')

const pollSchema = mongoose.Schema({
  question: {
    type: String,
    unique: true,
    required: true
  },
  firstOption: {
    title: {
      type: String,
      required: true
    },
    votes: {
      type: Number
    }
  },
  secondOption: {
    title: {
      type: String,
      required: true
    },
    votes: {
      type: Number
    }
  },
  thirdOption: {
    title: {
      type: String
    },
    votes: {
      type: Number
    }
  },
  fouthOption: {
    title: {
      type: String
    },
    votes: {
      type: Number
    }
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  totalVotes: {
    type: Number
  }
})

const Poll = mongoose.model('Poll', pollSchema)

export default Poll
