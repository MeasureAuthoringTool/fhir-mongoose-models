const { ElementSchema } = require('./Element');
const { FHIRDefinedTypeSchema } = require('./allSchemaHeaders.js');

FHIRDefinedTypeSchema.add(ElementSchema);
FHIRDefinedTypeSchema.remove('id');
FHIRDefinedTypeSchema.add({
  value: String,
});

module.exports.FHIRDefinedTypeSchema = FHIRDefinedTypeSchema;
