const { ActivityParticipantTypeSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ActivityDefinitionParticipantSchema } = require('./allSchemaHeaders.js');

ActivityDefinitionParticipantSchema.add(BackboneElementSchema);
ActivityDefinitionParticipantSchema.remove('id');
ActivityDefinitionParticipantSchema.add({
  type: ActivityParticipantTypeSchema,
  role: CodeableConceptSchema,
});

module.exports.ActivityDefinitionParticipantSchema = ActivityDefinitionParticipantSchema;
