const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitInsuranceSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitInsuranceSchema.add(BackboneElementSchema);
ExplanationOfBenefitInsuranceSchema.remove('id');
ExplanationOfBenefitInsuranceSchema.add({
  focal: PrimitiveBooleanSchema,
  coverage: ReferenceSchema,
  preAuthRef: [PrimitiveStringSchema],
});

module.exports.ExplanationOfBenefitInsuranceSchema = ExplanationOfBenefitInsuranceSchema;
