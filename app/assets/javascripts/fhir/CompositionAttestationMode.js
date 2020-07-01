const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CompositionAttestationModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CompositionAttestationMode' },
  _type: { type: String, default: 'FHIR::CompositionAttestationMode' },
});

class CompositionAttestationMode extends mongoose.Document {
  constructor(object) {
    super(object, CompositionAttestationModeSchema);
    this.typeName = 'CompositionAttestationMode';
    this._type = 'FHIR::CompositionAttestationMode';
  }
}

module.exports.CompositionAttestationModeSchema = CompositionAttestationModeSchema;
module.exports.CompositionAttestationMode = CompositionAttestationMode;
