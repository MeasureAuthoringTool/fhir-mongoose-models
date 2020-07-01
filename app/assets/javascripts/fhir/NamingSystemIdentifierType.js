const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const NamingSystemIdentifierTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'NamingSystemIdentifierType' },
  _type: { type: String, default: 'FHIR::NamingSystemIdentifierType' },
});

class NamingSystemIdentifierType extends mongoose.Document {
  constructor(object) {
    super(object, NamingSystemIdentifierTypeSchema);
    this.typeName = 'NamingSystemIdentifierType';
    this._type = 'FHIR::NamingSystemIdentifierType';
  }
}

module.exports.NamingSystemIdentifierTypeSchema = NamingSystemIdentifierTypeSchema;
module.exports.NamingSystemIdentifierType = NamingSystemIdentifierType;
