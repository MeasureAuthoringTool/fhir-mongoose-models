const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { QuestionnaireResponseItemSchema } = require('./QuestionnaireResponseItem');
const { QuestionnaireResponseStatusSchema } = require('./QuestionnaireResponseStatus');
const { ReferenceSchema } = require('./Reference');

const QuestionnaireResponseSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'QuestionnaireResponse' },
  _type: { type: String, default: 'FHIR::QuestionnaireResponse' },
});

class QuestionnaireResponse extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireResponseSchema);
    this.typeName = 'QuestionnaireResponse';
    this._type = 'FHIR::QuestionnaireResponse';
  }
}

module.exports.QuestionnaireResponseSchema = QuestionnaireResponseSchema;
module.exports.QuestionnaireResponse = QuestionnaireResponse;
