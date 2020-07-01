const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const IdentifierUseSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'IdentifierUse' },
  _type: { type: String, default: 'FHIR::IdentifierUse' },
});

class IdentifierUse extends mongoose.Document {
  constructor(object) {
    super(object, IdentifierUseSchema);
    this.typeName = 'IdentifierUse';
    this._type = 'FHIR::IdentifierUse';
  }
}

module.exports.IdentifierUseSchema = IdentifierUseSchema;
module.exports.IdentifierUse = IdentifierUse;
