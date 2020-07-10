const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitRelatedSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitRelatedSchema.add(BackboneElementSchema);
ExplanationOfBenefitRelatedSchema.remove('id');
ExplanationOfBenefitRelatedSchema.add({
  claim: ReferenceSchema,
  relationship: CodeableConceptSchema,
  reference: IdentifierSchema,
});

module.exports.ExplanationOfBenefitRelatedSchema = ExplanationOfBenefitRelatedSchema;
