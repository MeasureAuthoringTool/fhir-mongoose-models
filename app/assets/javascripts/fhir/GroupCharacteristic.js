const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { GroupCharacteristicSchema } = require('./allSchemaHeaders.js');

GroupCharacteristicSchema.add(BackboneElementSchema);
GroupCharacteristicSchema.remove('id');
GroupCharacteristicSchema.add({
  code: CodeableConceptSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueQuantity: QuantitySchema,
  valueRange: RangeSchema,
  valueReference: ReferenceSchema,
  exclude: PrimitiveBooleanSchema,
  period: PeriodSchema,
});

module.exports.GroupCharacteristicSchema = GroupCharacteristicSchema;
