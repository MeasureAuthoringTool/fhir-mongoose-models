const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClaimDiagnosisSchema } = require('./allSchemaHeaders.js');

ClaimDiagnosisSchema.add(BackboneElementSchema);
ClaimDiagnosisSchema.remove('id');
ClaimDiagnosisSchema.add({
  sequence: PrimitivePositiveIntSchema,
  diagnosisCodeableConcept: CodeableConceptSchema,
  diagnosisReference: ReferenceSchema,
  type: [CodeableConceptSchema],
  onAdmission: CodeableConceptSchema,
  packageCode: CodeableConceptSchema,
});

module.exports.ClaimDiagnosisSchema = ClaimDiagnosisSchema;
