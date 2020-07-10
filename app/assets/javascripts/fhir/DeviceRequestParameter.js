const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { DeviceRequestParameterSchema } = require('./allSchemaHeaders.js');

DeviceRequestParameterSchema.add(BackboneElementSchema);
DeviceRequestParameterSchema.remove('id');
DeviceRequestParameterSchema.add({
  code: CodeableConceptSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueQuantity: QuantitySchema,
  valueRange: RangeSchema,
  valueBoolean: PrimitiveBooleanSchema,
});

module.exports.DeviceRequestParameterSchema = DeviceRequestParameterSchema;
