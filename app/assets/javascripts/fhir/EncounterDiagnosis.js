const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { EncounterDiagnosisSchema } = require('./allSchemaHeaders.js');

EncounterDiagnosisSchema.add(BackboneElementSchema);
EncounterDiagnosisSchema.remove('id');
EncounterDiagnosisSchema.add({
  condition: ReferenceSchema,
  use: CodeableConceptSchema,
  rank: PrimitivePositiveIntSchema,
});

module.exports.EncounterDiagnosisSchema = EncounterDiagnosisSchema;
