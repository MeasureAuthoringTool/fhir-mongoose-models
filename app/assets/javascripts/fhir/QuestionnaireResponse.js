const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireResponseItemSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireResponseStatusSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireResponseSchema } = require('./allSchemaHeaders.js');

QuestionnaireResponseSchema.add(DomainResourceSchema);
QuestionnaireResponseSchema.remove('id');
QuestionnaireResponseSchema.add({
  identifier: IdentifierSchema,
  basedOn: [ReferenceSchema],
  partOf: [ReferenceSchema],
  questionnaire: PrimitiveCanonicalSchema,
  status: QuestionnaireResponseStatusSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  authored: PrimitiveDateTimeSchema,
  author: ReferenceSchema,
  source: ReferenceSchema,
  item: [QuestionnaireResponseItemSchema],
});

module.exports.QuestionnaireResponseSchema = QuestionnaireResponseSchema;
