const mongoose = require('mongoose/browser');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CountSchema = QuantitySchemaFunction({
   fhirTitle: { type: String, default: 'Count' },
});

class Count extends mongoose.Document {
  constructor(object) {
    super(object, CountSchema);
    this._type = 'FHIR::Count';
  }
};


module.exports.CountSchema = CountSchema;
module.exports.Count = Count;
