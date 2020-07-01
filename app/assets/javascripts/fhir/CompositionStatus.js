const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CompositionStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CompositionStatus' },
  _type: { type: String, default: 'FHIR::CompositionStatus' },
});

class CompositionStatus extends mongoose.Document {
  constructor(object) {
    super(object, CompositionStatusSchema);
    this.typeName = 'CompositionStatus';
    this._type = 'FHIR::CompositionStatus';
  }
}

module.exports.CompositionStatusSchema = CompositionStatusSchema;
module.exports.CompositionStatus = CompositionStatus;
