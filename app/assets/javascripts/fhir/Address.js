const { AddressTypeSchema } = require('./allSchemaHeaders.js');
const { AddressUseSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { AddressSchema } = require('./allSchemaHeaders.js');

AddressSchema.add(ElementSchema);
AddressSchema.remove('id');
AddressSchema.add({
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
});

module.exports.AddressSchema = AddressSchema;
