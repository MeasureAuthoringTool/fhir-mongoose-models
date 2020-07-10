const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ConditionStageSchema } = require('./allSchemaHeaders.js');

ConditionStageSchema.add(BackboneElementSchema);
ConditionStageSchema.remove('id');
ConditionStageSchema.add({
  summary: CodeableConceptSchema,
  assessment: [ReferenceSchema],
  type: CodeableConceptSchema,
});

module.exports.ConditionStageSchema = ConditionStageSchema;
