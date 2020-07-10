const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RequestGroupActionSchema } = require('./allSchemaHeaders.js');
const { RequestIntentSchema } = require('./allSchemaHeaders.js');
const { RequestPrioritySchema } = require('./allSchemaHeaders.js');
const { RequestStatusSchema } = require('./allSchemaHeaders.js');
const { RequestGroupSchema } = require('./allSchemaHeaders.js');

RequestGroupSchema.add(DomainResourceSchema);
RequestGroupSchema.remove('id');
RequestGroupSchema.add({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  replaces: [ReferenceSchema],
  groupIdentifier: IdentifierSchema,
  status: RequestStatusSchema,
  intent: RequestIntentSchema,
  priority: RequestPrioritySchema,
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  authoredOn: PrimitiveDateTimeSchema,
  author: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  note: [AnnotationSchema],
  action: [RequestGroupActionSchema],
});

module.exports.RequestGroupSchema = RequestGroupSchema;
