const mongoose = require("mongoose");

const { Schema } = mongoose;

const raffleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  bucketArray: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  ],
});

const Raffle = mongoose.model("Raffle", raffleSchema);

module.exports = Raffle;
