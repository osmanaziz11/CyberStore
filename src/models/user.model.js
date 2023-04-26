const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema(
  {
    id: { type: String },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    phone: {
      type: Number,
      default: 0,
    },
    progress: {
      type: Number,
      default: 0, // 0 -> Account has been just created 1 -> Account is now updated with new information
    },
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  this.id = uuidv4();
  next();
});

module.exports = model('User', userSchema);
