const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ProvenanceAgentSchema } = require('./allSchemaHeaders.js');

ProvenanceAgentSchema.add(BackboneElementSchema);
ProvenanceAgentSchema.remove('id');
ProvenanceAgentSchema.add({
  type: CodeableConceptSchema,
  role: [CodeableConceptSchema],
  who: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
});

module.exports.ProvenanceAgentSchema = ProvenanceAgentSchema;
