const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const NamingSystemTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'NamingSystemType' },
  _type: { type: String, default: 'FHIR::NamingSystemType' },
});

class NamingSystemType extends mongoose.Document {
  constructor(object) {
    super(object, NamingSystemTypeSchema);
    this.typeName = 'NamingSystemType';
    this._type = 'FHIR::NamingSystemType';
  }
}

module.exports.NamingSystemTypeSchema = NamingSystemTypeSchema;
module.exports.NamingSystemType = NamingSystemType;
