const mongoose = require('mongoose/browser');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const DurationSchema = QuantitySchemaFunction({
  typeName: { type: String, default: 'Duration' },
  _type: { type: String, default: 'FHIR::Duration' },
});

class Duration extends mongoose.Document {
  constructor(object) {
    super(object, DurationSchema);
    this.typeName = 'Duration';
    this._type = 'FHIR::Duration';
  }
}

module.exports.DurationSchema = DurationSchema;
module.exports.Duration = Duration;
