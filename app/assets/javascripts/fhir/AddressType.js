const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AddressTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AddressType' },
  _type: { type: String, default: 'FHIR::AddressType' },
});

class AddressType extends mongoose.Document {
  constructor(object) {
    super(object, AddressTypeSchema);
    this.typeName = 'AddressType';
    this._type = 'FHIR::AddressType';
  }
}

module.exports.AddressTypeSchema = AddressTypeSchema;
module.exports.AddressType = AddressType;
