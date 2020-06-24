const mongoose = require('mongoose/browser');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DistanceSchema = QuantitySchemaFunction({
   fhirTitle: { type: String, default: 'Distance' },
});

class Distance extends mongoose.Document {
  constructor(object) {
    super(object, DistanceSchema);
    this._type = 'FHIR::Distance';
  }
};


module.exports.DistanceSchema = DistanceSchema;
module.exports.Distance = Distance;
