const mongoose = require('mongoose/browser');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DurationSchema = QuantitySchemaFunction({
   fhirTitle: { type: String, default: 'Duration' },
});

class Duration extends mongoose.Document {
  constructor(object) {
    super(object, DurationSchema);
    this._type = 'FHIR::Duration';
  }
};


module.exports.DurationSchema = DurationSchema;
module.exports.Duration = Duration;
