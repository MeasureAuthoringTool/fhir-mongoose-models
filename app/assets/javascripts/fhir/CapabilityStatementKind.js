const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CapabilityStatementKindSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CapabilityStatementKind' },
  _type: { type: String, default: 'FHIR::CapabilityStatementKind' },
});

class CapabilityStatementKind extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementKindSchema);
    this.typeName = 'CapabilityStatementKind';
    this._type = 'FHIR::CapabilityStatementKind';
  }
}

module.exports.CapabilityStatementKindSchema = CapabilityStatementKindSchema;
module.exports.CapabilityStatementKind = CapabilityStatementKind;
