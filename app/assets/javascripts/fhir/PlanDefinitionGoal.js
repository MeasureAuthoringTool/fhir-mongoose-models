const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionGoalTargetSchema } = require('./allSchemaHeaders.js');
const { RelatedArtifactSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionGoalSchema } = require('./allSchemaHeaders.js');

PlanDefinitionGoalSchema.add(BackboneElementSchema);
PlanDefinitionGoalSchema.remove('id');
PlanDefinitionGoalSchema.add({
  category: CodeableConceptSchema,
  description: CodeableConceptSchema,
  priority: CodeableConceptSchema,
  start: CodeableConceptSchema,
  addresses: [CodeableConceptSchema],
  documentation: [RelatedArtifactSchema],
  target: [PlanDefinitionGoalTargetSchema],
});

module.exports.PlanDefinitionGoalSchema = PlanDefinitionGoalSchema;
