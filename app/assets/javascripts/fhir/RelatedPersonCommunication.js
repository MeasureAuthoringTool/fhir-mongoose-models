const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { RelatedPersonCommunicationSchema } = require('./allSchemaHeaders.js');

RelatedPersonCommunicationSchema.add(BackboneElementSchema);
RelatedPersonCommunicationSchema.remove('id');
RelatedPersonCommunicationSchema.add({
  language: CodeableConceptSchema,
  preferred: PrimitiveBooleanSchema,
});

module.exports.RelatedPersonCommunicationSchema = RelatedPersonCommunicationSchema;
