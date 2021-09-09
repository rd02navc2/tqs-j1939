//var mongoose = require('mongoose')
//var SchemaTypes = mongoose.Schema.Types;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      SN: String,
      CANID: String,
      SPN1761: Number,
      createdAt:String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
