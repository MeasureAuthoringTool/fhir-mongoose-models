const { AddressSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitAccidentSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitAccidentSchema.add(BackboneElementSchema);
ExplanationOfBenefitAccidentSchema.remove('id');
ExplanationOfBenefitAccidentSchema.add({
  date: PrimitiveDateSchema,
  type: CodeableConceptSchema,
  locationAddress: AddressSchema,
  locationReference: ReferenceSchema,
});

module.exports.ExplanationOfBenefitAccidentSchema = ExplanationOfBenefitAccidentSchema;
