const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { DevicePropertySchema } = require('./allSchemaHeaders.js');

DevicePropertySchema.add(BackboneElementSchema);
DevicePropertySchema.remove('id');
DevicePropertySchema.add({
  type: CodeableConceptSchema,
  valueQuantity: [QuantitySchema],
  valueCode: [CodeableConceptSchema],
});

module.exports.DevicePropertySchema = DevicePropertySchema;
