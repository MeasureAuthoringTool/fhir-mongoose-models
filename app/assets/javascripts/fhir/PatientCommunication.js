const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PatientCommunicationSchema } = require('./allSchemaHeaders.js');

PatientCommunicationSchema.add(BackboneElementSchema);
PatientCommunicationSchema.remove('id');
PatientCommunicationSchema.add({
  language: CodeableConceptSchema,
  preferred: PrimitiveBooleanSchema,
});

module.exports.PatientCommunicationSchema = PatientCommunicationSchema;
