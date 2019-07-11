const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/visitors",
  { useNewUrlParser: true },
  () => {
    console.log("connected to database");
  }
);

mongoose.set("useFindAndModify", false);

const Prospect = mongoose.model("visitors", {
  Name: {
    type: String,
    required: true
  },
  Surname: {
    type: String,
    required: true
  },
  Date_of_Visit: {
    type: Date,
    default: Date.now
  },
  Age: {
    type: Number,
    required: true
  },
  Reason_for_Inquiry: {
    type: String,
    required: true
  },
  Assistant: {
    type: String,
    required: true
  }
});

module.exports = Prospect;
