const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { MessageHeaderDestinationSchema } = require('./allSchemaHeaders.js');
const { MessageHeaderResponseSchema } = require('./allSchemaHeaders.js');
const { MessageHeaderSourceSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MessageHeaderSchema } = require('./allSchemaHeaders.js');

MessageHeaderSchema.add(DomainResourceSchema);
MessageHeaderSchema.remove('id');
MessageHeaderSchema.add({
  eventCoding: CodingSchema,
  eventUri: PrimitiveUriSchema,
  destination: [MessageHeaderDestinationSchema],
  sender: ReferenceSchema,
  enterer: ReferenceSchema,
  author: ReferenceSchema,
  source: MessageHeaderSourceSchema,
  responsible: ReferenceSchema,
  reason: CodeableConceptSchema,
  response: MessageHeaderResponseSchema,
  focus: [ReferenceSchema],
  definition: PrimitiveCanonicalSchema,
});

module.exports.MessageHeaderSchema = MessageHeaderSchema;
