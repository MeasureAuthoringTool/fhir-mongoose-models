const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CompositionAttesterSchema } = require('./allSchemaHeaders.js');
const { CompositionEventSchema } = require('./allSchemaHeaders.js');
const { CompositionRelatesToSchema } = require('./allSchemaHeaders.js');
const { CompositionSectionSchema } = require('./allSchemaHeaders.js');
const { CompositionStatusSchema } = require('./allSchemaHeaders.js');
const { DocumentConfidentialitySchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CompositionSchema } = require('./allSchemaHeaders.js');

CompositionSchema.add(DomainResourceSchema);
CompositionSchema.remove('id');
CompositionSchema.add({
  identifier: IdentifierSchema,
  status: CompositionStatusSchema,
  type: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  author: [ReferenceSchema],
  title: PrimitiveStringSchema,
  confidentiality: DocumentConfidentialitySchema,
  attester: [CompositionAttesterSchema],
  custodian: ReferenceSchema,
  relatesTo: [CompositionRelatesToSchema],
  event: [CompositionEventSchema],
  section: [CompositionSectionSchema],
});

module.exports.CompositionSchema = CompositionSchema;
