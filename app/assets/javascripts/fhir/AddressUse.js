const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AddressUseSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AddressUse' },
  _type: { type: String, default: 'FHIR::AddressUse' },
});

class AddressUse extends mongoose.Document {
  constructor(object) {
    super(object, AddressUseSchema);
    this.typeName = 'AddressUse';
    this._type = 'FHIR::AddressUse';
  }
}

module.exports.AddressUseSchema = AddressUseSchema;
module.exports.AddressUse = AddressUse;
