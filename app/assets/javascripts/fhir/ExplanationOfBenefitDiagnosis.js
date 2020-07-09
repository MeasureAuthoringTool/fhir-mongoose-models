const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitDiagnosisSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitDiagnosisSchema.add(BackboneElementSchema);
ExplanationOfBenefitDiagnosisSchema.remove('id');
ExplanationOfBenefitDiagnosisSchema.add({
  sequence: PrimitivePositiveIntSchema,
  diagnosisCodeableConcept: CodeableConceptSchema,
  diagnosisReference: ReferenceSchema,
  type: [CodeableConceptSchema],
  onAdmission: CodeableConceptSchema,
  packageCode: CodeableConceptSchema,
});

module.exports.ExplanationOfBenefitDiagnosisSchema = ExplanationOfBenefitDiagnosisSchema;
