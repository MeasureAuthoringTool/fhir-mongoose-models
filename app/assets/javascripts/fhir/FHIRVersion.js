const { ElementSchema } = require('./Element');
const { FHIRVersionSchema } = require('./allSchemaHeaders.js');

FHIRVersionSchema.add(ElementSchema);
FHIRVersionSchema.remove('id');
FHIRVersionSchema.add({
  value: String,
});

module.exports.FHIRVersionSchema = FHIRVersionSchema;
