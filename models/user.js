const { Schema,model } = require('mongoose');

// Schema to create a course model
const UserSchema = new Schema(
  {
    username: {
      type: String, 
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true, 
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought'
    }],
    friends:[{
      type: Schema.Types.ObjectId,
      ref: 'user'
    }],
   
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
UserSchema.virtual('friendsCount').get(function () {
  return this.friends.length;
});

const User = model('user',UserSchema );

module.exports = User;






