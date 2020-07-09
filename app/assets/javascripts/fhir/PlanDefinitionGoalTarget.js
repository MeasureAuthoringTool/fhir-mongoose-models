const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionGoalTargetSchema } = require('./allSchemaHeaders.js');

PlanDefinitionGoalTargetSchema.add(BackboneElementSchema);
PlanDefinitionGoalTargetSchema.remove('id');
PlanDefinitionGoalTargetSchema.add({
  measure: CodeableConceptSchema,
  detailQuantity: QuantitySchema,
  detailRange: RangeSchema,
  detailCodeableConcept: CodeableConceptSchema,
  due: DurationSchema,
});

module.exports.PlanDefinitionGoalTargetSchema = PlanDefinitionGoalTargetSchema;
