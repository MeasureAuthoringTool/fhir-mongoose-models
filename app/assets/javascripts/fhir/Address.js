const mongoose = require('mongoose/browser');
const { AddressTypeSchema } = require('./AddressType');
const { AddressUseSchema } = require('./AddressUse');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const AddressSchema = ElementSchemaFunction({
  use: AddressUseSchema,
  type: AddressTypeSchema,
  text: PrimitiveStringSchema,
  line: [PrimitiveStringSchema],
  city: PrimitiveStringSchema,
  district: PrimitiveStringSchema,
  state: PrimitiveStringSchema,
  postalCode: PrimitiveStringSchema,
  country: PrimitiveStringSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'Address' },
  _type: { type: String, default: 'FHIR::Address' },
});

class Address extends mongoose.Document {
  constructor(object) {
    super(object, AddressSchema);
    this.typeName = 'Address';
    this._type = 'FHIR::Address';
  }
}

module.exports.AddressSchema = AddressSchema;
module.exports.Address = Address;
