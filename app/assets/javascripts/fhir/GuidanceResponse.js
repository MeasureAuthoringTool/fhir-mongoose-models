const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DataRequirementSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { GuidanceResponseStatusSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { GuidanceResponseSchema } = require('./allSchemaHeaders.js');

GuidanceResponseSchema.add(DomainResourceSchema);
GuidanceResponseSchema.remove('id');
GuidanceResponseSchema.add({
  requestIdentifier: IdentifierSchema,
  identifier: [IdentifierSchema],
  moduleUri: PrimitiveUriSchema,
  moduleCanonical: PrimitiveCanonicalSchema,
  moduleCodeableConcept: CodeableConceptSchema,
  status: GuidanceResponseStatusSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  performer: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  note: [AnnotationSchema],
  evaluationMessage: [ReferenceSchema],
  outputParameters: ReferenceSchema,
  result: ReferenceSchema,
  dataRequirement: [DataRequirementSchema],
});

module.exports.GuidanceResponseSchema = GuidanceResponseSchema;
