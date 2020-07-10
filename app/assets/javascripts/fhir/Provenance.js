const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ProvenanceAgentSchema } = require('./allSchemaHeaders.js');
const { ProvenanceEntitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SignatureSchema } = require('./allSchemaHeaders.js');
const { ProvenanceSchema } = require('./allSchemaHeaders.js');

ProvenanceSchema.add(DomainResourceSchema);
ProvenanceSchema.remove('id');
ProvenanceSchema.add({
  target: [ReferenceSchema],
  occurredPeriod: PeriodSchema,
  occurredDateTime: PrimitiveDateTimeSchema,
  recorded: PrimitiveInstantSchema,
  policy: [PrimitiveUriSchema],
  location: ReferenceSchema,
  reason: [CodeableConceptSchema],
  activity: CodeableConceptSchema,
  agent: [ProvenanceAgentSchema],
  entity: [ProvenanceEntitySchema],
  signature: [SignatureSchema],
});

module.exports.ProvenanceSchema = ProvenanceSchema;
