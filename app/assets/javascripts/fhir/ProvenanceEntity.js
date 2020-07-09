const { BackboneElementSchema } = require('./BackboneElement');
const { ProvenanceAgentSchema } = require('./allSchemaHeaders.js');
const { ProvenanceEntityRoleSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ProvenanceEntitySchema } = require('./allSchemaHeaders.js');

ProvenanceEntitySchema.add(BackboneElementSchema);
ProvenanceEntitySchema.remove('id');
ProvenanceEntitySchema.add({
  role: ProvenanceEntityRoleSchema,
  what: ReferenceSchema,
  agent: [ProvenanceAgentSchema],
});

module.exports.ProvenanceEntitySchema = ProvenanceEntitySchema;
