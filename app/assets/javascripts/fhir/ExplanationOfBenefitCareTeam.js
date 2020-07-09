const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitCareTeamSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitCareTeamSchema.add(BackboneElementSchema);
ExplanationOfBenefitCareTeamSchema.remove('id');
ExplanationOfBenefitCareTeamSchema.add({
  sequence: PrimitivePositiveIntSchema,
  provider: ReferenceSchema,
  responsible: PrimitiveBooleanSchema,
  role: CodeableConceptSchema,
  qualification: CodeableConceptSchema,
});

module.exports.ExplanationOfBenefitCareTeamSchema = ExplanationOfBenefitCareTeamSchema;
