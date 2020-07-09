const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { SupplyRequestParameterSchema } = require('./allSchemaHeaders.js');

SupplyRequestParameterSchema.add(BackboneElementSchema);
SupplyRequestParameterSchema.remove('id');
SupplyRequestParameterSchema.add({
  code: CodeableConceptSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueQuantity: QuantitySchema,
  valueRange: RangeSchema,
  valueBoolean: PrimitiveBooleanSchema,
});

module.exports.SupplyRequestParameterSchema = SupplyRequestParameterSchema;
