const { ElementSchema } = require('./Element');
const { AddressUseSchema } = require('./allSchemaHeaders.js');

AddressUseSchema.add(ElementSchema);
AddressUseSchema.remove('id');
AddressUseSchema.add({
  value: String,
});

module.exports.AddressUseSchema = AddressUseSchema;
