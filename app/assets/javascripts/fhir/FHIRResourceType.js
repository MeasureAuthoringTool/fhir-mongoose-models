const { ElementSchema } = require('./Element');
const { FHIRResourceTypeSchema } = require('./allSchemaHeaders.js');

FHIRResourceTypeSchema.add(ElementSchema);
FHIRResourceTypeSchema.remove('id');
FHIRResourceTypeSchema.add({
  value: String,
});

module.exports.FHIRResourceTypeSchema = FHIRResourceTypeSchema;
