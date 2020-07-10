const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitPayeeSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitPayeeSchema.add(BackboneElementSchema);
ExplanationOfBenefitPayeeSchema.remove('id');
ExplanationOfBenefitPayeeSchema.add({
  type: CodeableConceptSchema,
  party: ReferenceSchema,
});

module.exports.ExplanationOfBenefitPayeeSchema = ExplanationOfBenefitPayeeSchema;
