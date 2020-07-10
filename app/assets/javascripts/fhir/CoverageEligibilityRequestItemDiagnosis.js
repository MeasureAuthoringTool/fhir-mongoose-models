const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityRequestItemDiagnosisSchema } = require('./allSchemaHeaders.js');

CoverageEligibilityRequestItemDiagnosisSchema.add(BackboneElementSchema);
CoverageEligibilityRequestItemDiagnosisSchema.remove('id');
CoverageEligibilityRequestItemDiagnosisSchema.add({
  diagnosisCodeableConcept: CodeableConceptSchema,
  diagnosisReference: ReferenceSchema,
});

module.exports.CoverageEligibilityRequestItemDiagnosisSchema = CoverageEligibilityRequestItemDiagnosisSchema;
