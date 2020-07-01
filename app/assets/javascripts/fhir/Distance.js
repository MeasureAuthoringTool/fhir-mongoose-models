const mongoose = require('mongoose/browser');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const DistanceSchema = QuantitySchemaFunction({
  typeName: { type: String, default: 'Distance' },
  _type: { type: String, default: 'FHIR::Distance' },
});

class Distance extends mongoose.Document {
  constructor(object) {
    super(object, DistanceSchema);
    this.typeName = 'Distance';
    this._type = 'FHIR::Distance';
  }
}

module.exports.DistanceSchema = DistanceSchema;
module.exports.Distance = Distance;
