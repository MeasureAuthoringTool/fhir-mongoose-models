const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SpecimenCollectionSchema } = require('./allSchemaHeaders.js');
const { SpecimenContainerSchema } = require('./allSchemaHeaders.js');
const { SpecimenProcessingSchema } = require('./allSchemaHeaders.js');
const { SpecimenStatusSchema } = require('./allSchemaHeaders.js');
const { SpecimenSchema } = require('./allSchemaHeaders.js');

SpecimenSchema.add(DomainResourceSchema);
SpecimenSchema.remove('id');
SpecimenSchema.add({
  identifier: [IdentifierSchema],
  accessionIdentifier: IdentifierSchema,
  status: SpecimenStatusSchema,
  type: CodeableConceptSchema,
  subject: ReferenceSchema,
  receivedTime: PrimitiveDateTimeSchema,
  parent: [ReferenceSchema],
  request: [ReferenceSchema],
  _collection: SpecimenCollectionSchema,
  processing: [SpecimenProcessingSchema],
  container: [SpecimenContainerSchema],
  condition: [CodeableConceptSchema],
  note: [AnnotationSchema],
});

module.exports.SpecimenSchema = SpecimenSchema;
