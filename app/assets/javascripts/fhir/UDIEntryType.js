const { ElementSchema } = require('./Element');
const { UDIEntryTypeSchema } = require('./allSchemaHeaders.js');

UDIEntryTypeSchema.add(ElementSchema);
UDIEntryTypeSchema.remove('id');
UDIEntryTypeSchema.add({
  value: String,
});

module.exports.UDIEntryTypeSchema = UDIEntryTypeSchema;
