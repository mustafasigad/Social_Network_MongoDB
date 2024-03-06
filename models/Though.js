const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');
const { formatdate } = require('../utils/helpers')
// Schema to create though model
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => formatdate(date),
    },
    username: {
      type: String,
      required: true,
     
    },
    // sub document
    reactions: [reactionSchema],
  },
  {
    toJSON: {
        virtuals: true,
         getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual('reactionCount').get(function () {
return this.reactions.length;
});

const Thoughts = model('thought', ThoughtSchema);

module.exports = Thoughts;




