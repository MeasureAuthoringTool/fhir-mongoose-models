const { ActionParticipantTypeSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionActionParticipantSchema } = require('./allSchemaHeaders.js');

PlanDefinitionActionParticipantSchema.add(BackboneElementSchema);
PlanDefinitionActionParticipantSchema.remove('id');
PlanDefinitionActionParticipantSchema.add({
  type: ActionParticipantTypeSchema,
  role: CodeableConceptSchema,
});

module.exports.PlanDefinitionActionParticipantSchema = PlanDefinitionActionParticipantSchema;
