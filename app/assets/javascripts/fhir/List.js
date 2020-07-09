const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ListEntrySchema } = require('./allSchemaHeaders.js');
const { ListModeSchema } = require('./allSchemaHeaders.js');
const { ListStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ListSchema } = require('./allSchemaHeaders.js');

ListSchema.add(DomainResourceSchema);
ListSchema.remove('id');
ListSchema.add({
  identifier: [IdentifierSchema],
  status: ListStatusSchema,
  mode: ListModeSchema,
  title: PrimitiveStringSchema,
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  source: ReferenceSchema,
  orderedBy: CodeableConceptSchema,
  note: [AnnotationSchema],
  entry: [ListEntrySchema],
  emptyReason: CodeableConceptSchema,
});

module.exports.ListSchema = ListSchema;
