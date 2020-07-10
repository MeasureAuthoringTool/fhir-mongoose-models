const { ElementSchema } = require('./Element');
const { FHIRAllTypesSchema } = require('./allSchemaHeaders.js');

FHIRAllTypesSchema.add(ElementSchema);
FHIRAllTypesSchema.remove('id');
FHIRAllTypesSchema.add({
  value: String,
});

module.exports.FHIRAllTypesSchema = FHIRAllTypesSchema;
