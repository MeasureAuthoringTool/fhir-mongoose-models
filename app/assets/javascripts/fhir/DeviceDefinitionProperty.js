const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionPropertySchema } = require('./allSchemaHeaders.js');

DeviceDefinitionPropertySchema.add(BackboneElementSchema);
DeviceDefinitionPropertySchema.remove('id');
DeviceDefinitionPropertySchema.add({
  type: CodeableConceptSchema,
  valueQuantity: [QuantitySchema],
  valueCode: [CodeableConceptSchema],
});

module.exports.DeviceDefinitionPropertySchema = DeviceDefinitionPropertySchema;
