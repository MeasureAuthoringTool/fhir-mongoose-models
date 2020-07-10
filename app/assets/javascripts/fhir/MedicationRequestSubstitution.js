const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { MedicationRequestSubstitutionSchema } = require('./allSchemaHeaders.js');

MedicationRequestSubstitutionSchema.add(BackboneElementSchema);
MedicationRequestSubstitutionSchema.remove('id');
MedicationRequestSubstitutionSchema.add({
  allowedBoolean: PrimitiveBooleanSchema,
  allowedCodeableConcept: CodeableConceptSchema,
  reason: CodeableConceptSchema,
});

module.exports.MedicationRequestSubstitutionSchema = MedicationRequestSubstitutionSchema;
