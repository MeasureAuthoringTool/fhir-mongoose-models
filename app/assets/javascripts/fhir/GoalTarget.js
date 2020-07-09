const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { GoalTargetSchema } = require('./allSchemaHeaders.js');

GoalTargetSchema.add(BackboneElementSchema);
GoalTargetSchema.remove('id');
GoalTargetSchema.add({
  measure: CodeableConceptSchema,
  detailQuantity: QuantitySchema,
  detailRange: RangeSchema,
  detailCodeableConcept: CodeableConceptSchema,
  detailString: PrimitiveStringSchema,
  detailBoolean: PrimitiveBooleanSchema,
  detailInteger: PrimitiveIntegerSchema,
  detailRatio: RatioSchema,
  dueDate: PrimitiveDateSchema,
  dueDuration: DurationSchema,
});

module.exports.GoalTargetSchema = GoalTargetSchema;
