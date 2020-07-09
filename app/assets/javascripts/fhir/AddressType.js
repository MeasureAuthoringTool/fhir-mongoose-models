const { ElementSchema } = require('./Element');
const { AddressTypeSchema } = require('./allSchemaHeaders.js');

AddressTypeSchema.add(ElementSchema);
AddressTypeSchema.remove('id');
AddressTypeSchema.add({
  value: String,
});

module.exports.AddressTypeSchema = AddressTypeSchema;
