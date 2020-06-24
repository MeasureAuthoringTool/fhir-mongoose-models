const mongoose = require('mongoose/browser');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AgeSchema = QuantitySchemaFunction({
   fhirTitle: { type: String, default: 'Age' },
});

class Age extends mongoose.Document {
  constructor(object) {
    super(object, AgeSchema);
    this._type = 'FHIR::Age';
  }
};


module.exports.AgeSchema = AgeSchema;
module.exports.Age = Age;
