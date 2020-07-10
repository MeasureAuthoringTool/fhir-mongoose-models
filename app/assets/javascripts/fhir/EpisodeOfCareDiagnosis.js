const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { EpisodeOfCareDiagnosisSchema } = require('./allSchemaHeaders.js');

EpisodeOfCareDiagnosisSchema.add(BackboneElementSchema);
EpisodeOfCareDiagnosisSchema.remove('id');
EpisodeOfCareDiagnosisSchema.add({
  condition: ReferenceSchema,
  role: CodeableConceptSchema,
  rank: PrimitivePositiveIntSchema,
});

module.exports.EpisodeOfCareDiagnosisSchema = EpisodeOfCareDiagnosisSchema;
