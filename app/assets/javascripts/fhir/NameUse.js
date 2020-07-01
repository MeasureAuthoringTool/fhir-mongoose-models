const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const NameUseSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'NameUse' },
  _type: { type: String, default: 'FHIR::NameUse' },
});

class NameUse extends mongoose.Document {
  constructor(object) {
    super(object, NameUseSchema);
    this.typeName = 'NameUse';
    this._type = 'FHIR::NameUse';
  }
}

module.exports.NameUseSchema = NameUseSchema;
module.exports.NameUse = NameUse;
